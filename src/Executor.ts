import { 
    Pair,
    Percent,
    Token,
    TokenAmount,
    Trade,
    TradeType,
    Currency,
    Route,
} from "@sushiswap/sdk";
import * as CSwap from "./deployments/localhost/TestSovrynSwap.json";
import { Contract, ethers } from "ethers";
import Order from "./types/Order";
import Log from "./Log";
import { SettlementFactory } from "./contracts";
import MarginOrder from "./types/MarginOrder";
import config from "./config";

export type OnOrderFilled = (
    hash: string,
    amountIn: ethers.BigNumber,
    amountOut: ethers.BigNumber
) => Promise<void> | void;

const findToken = (tokens: Token[], tokenAddress: string) => {
    return tokens.find(token => token.address === tokenAddress);
};

const deductFee = (amount: ethers.BigNumber) => {
    return amount.sub(amount.mul(2).div(1000)); // Fee: 0.2%
};

const argsForOrder = async (order: Order, signer: ethers.Signer) => {
    const contract = SettlementFactory.connect(config.contracts.settlement, signer);
    const arg = {
        order,
        amountToFillIn: order.amountIn,
        path: order.trade.route.path.map(token => token.address)
    };
    try {
        const gasLimit = await contract.estimateGas.fillOrder(arg);
        console.log('gasLimit', Number(gasLimit));
        return arg;
    } catch (e) {
        Log.w("  " + order.hash + " will revert");
        console.log(e);
        return null;
    }
};

const equalsCurrency = (currency1: Currency, currency2: Currency) => {
    return currency1.name == currency2.name;
}

const getTrade = async (provider, pairs: Pair[], tokenIn: Token, tokenOut: Token, amountIn: string): Promise<Trade> => {
    const swapContract = new Contract(config.contracts.sovrynSwap, CSwap.abi, provider);
    let bestPair, bestAmountOut;
    for (let i = 0; i < pairs.length; i++) {
        const { token0, token1 } = pairs[i];
        if (equalsCurrency(token0, tokenIn) && equalsCurrency(token1, tokenOut) ||
            equalsCurrency(token0, tokenOut) && equalsCurrency(token1, tokenIn)
        ) {
            const amountOut = await swapContract.rateByPath(
                [tokenIn.address, tokenOut.address],
                amountIn
            );
            if (bestPair == null || amountOut < bestAmountOut) {
                bestPair = pairs[i];
                bestAmountOut = amountOut;
            }
        }
    }

    if (bestPair) {
        return new Trade(
            new Route(
                [bestPair],
                tokenIn,
                tokenOut
            ),
            new TokenAmount(tokenIn, amountIn),
            TradeType.EXACT_INPUT
        );
    }
};

class Executor {
    pendingOrders: { [orderHash: string]: ethers.ContractTransaction } = {};
    pendingMarginOrders: { [orderHash: string]: boolean } = {};
    provider: ethers.providers.BaseProvider;

    constructor(provider: ethers.providers.BaseProvider) {
        this.provider = provider;
    }

    watch(onOrderFilled: OnOrderFilled) {
        const settlement = SettlementFactory.connect(config.contracts.settlement, this.provider);
        settlement.on("OrderFilled", onOrderFilled);
    }

    watchMargin(onOrderFilled: OnOrderFilled) {
        const settlement = SettlementFactory.connect(config.contracts.settlement, this.provider);
        settlement.on("MarginOrderFilled", onOrderFilled);
    }

    async filledAmountIn(hash: string) {
        const settlement = SettlementFactory.connect(config.contracts.settlement, this.provider);
        return await settlement.filledAmountInOfHash(hash);
    }

    async match(tokens: Token[], pairs: Pair[], orders: Order[], timeout: number) {
        const executables: Order[] = [];
        const now = Date.now();
        for (const order of orders) {
            const fromToken = findToken(tokens, order.fromToken);
            const toToken = findToken(tokens, order.toToken);
            const filledAmountIn = await this.filledAmountIn(order.hash);
            if (fromToken && toToken && order.deadline.toNumber() * 1000 >= now && filledAmountIn.lt(order.amountIn)) {
                const trade = await getTrade(
                    this.provider,
                    pairs,
                    fromToken,
                    toToken,
                    order.amountIn.toString()
                );
                if (trade) {
                    const tradeAmountOutMin = trade.minimumAmountOut(new Percent("0"));
                    if (order.amountOutMin.lt(tradeAmountOutMin.raw.toString())) {
                        executables.push({
                            ...order,
                            trade
                        });
                    }
                }
            }
            if (Date.now() - now > timeout) break;
        }
        return executables;
    }

    async fillOrders(orders: Order[], signer: ethers.Signer) {
        const contract = SettlementFactory.connect(config.contracts.settlement, signer);
        const args = (
            await Promise.all(
                orders
                    .filter(order => order.trade)
                    .filter(order => !this.pendingOrders[order.hash])
                    .map(order => argsForOrder(order, signer))
            )
        ).filter(arg => arg !== null);
        if (args.length > 0) {
            Log.d("filling orders...");
            args.forEach(arg => {
                Log.d("  " + arg.order.hash + " (amountIn: " + arg.order.trade.inputAmount.toFixed() + ")");
            });
            console.log('signer', await signer.getAddress())
            const gasLimit = await contract.estimateGas.fillOrders(args);
            const gasPrice = await signer.getGasPrice();
            // console.log('gas limit %s, price %s', Number(gasLimit), Number(gasPrice))
            const tx = await contract.fillOrders(args, {
                gasLimit: gasLimit.mul(120).div(100),
                gasPrice: gasPrice.mul(120).div(100)
            });
            args.forEach(arg => {
                this.pendingOrders[arg.order.hash] = tx;
            });
            tx.wait().then(() => {
                args.forEach(arg => delete this.pendingOrders[arg.order.hash]);
            });
            Log.d("  tx hash: ", tx.hash);
        }
    }

    async fillMarginOrders(orders: MarginOrder[], signer: ethers.Signer) {
        const contract = SettlementFactory.connect(config.contracts.settlement, signer);
        const args = orders
            .filter(order => !this.pendingMarginOrders[order.hash])
            .map(order => ({ order }));

        if (args.length > 0) {
            Log.d("filling margin orders...");
            args.forEach(arg => {
                Log.d("  " + arg.order.hash);
                this.pendingMarginOrders[arg.order.hash] = true;
            });
            const gasLimit = await contract.estimateGas.fillMarginOrders(args);
            const gasPrice = await signer.getGasPrice();
            const tx = await contract.fillMarginOrders(args, {
                gasLimit: gasLimit.mul(120).div(100),
                gasPrice: gasPrice.mul(120).div(100)
            });
            tx.wait().then(() => {
                args.forEach(arg => delete this.pendingMarginOrders[arg.order.hash]);
            });
            Log.d("  tx hash: ", tx.hash);
        }
    }
}

export default Executor;
