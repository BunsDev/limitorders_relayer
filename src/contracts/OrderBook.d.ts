/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent } from "./common";

interface OrderBookInterface extends ethers.utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "allHashes(uint256,uint256)": FunctionFragment;
    "createOrder((address,address,address,uint256,uint256,address,uint256,uint256,uint8,bytes32,bytes32))": FunctionFragment;
    "getMaker(bytes32)": FunctionFragment;
    "hashesOfFromToken(address,uint256,uint256)": FunctionFragment;
    "hashesOfMaker(address,uint256,uint256)": FunctionFragment;
    "hashesOfToToken(address,uint256,uint256)": FunctionFragment;
    "numberOfAllHashes()": FunctionFragment;
    "numberOfHashesOfFromToken(address)": FunctionFragment;
    "numberOfHashesOfMaker(address)": FunctionFragment;
    "numberOfHashesOfToToken(address)": FunctionFragment;
    "orderOfHash(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allHashes",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [
      {
        maker: string;
        fromToken: string;
        toToken: string;
        amountIn: BigNumberish;
        amountOutMin: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        created: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "getMaker", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "hashesOfFromToken",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hashesOfMaker",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hashesOfToToken",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfAllHashes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfHashesOfFromToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfHashesOfMaker",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfHashesOfToToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "orderOfHash",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allHashes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getMaker", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashesOfFromToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashesOfMaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashesOfToToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfAllHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfHashesOfFromToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfHashesOfMaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfHashesOfToToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "orderOfHash",
    data: BytesLike
  ): Result;

  events: {
    "OrderCreated(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OrderCreated"): EventFragment;
}

export type OrderCreatedEvent = TypedEvent<[string] & { hash: string }>;

export class OrderBook extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: OrderBookInterface;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    allHashes(
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    createOrder(
      order: {
        maker: string;
        fromToken: string;
        toToken: string;
        amountIn: BigNumberish;
        amountOutMin: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        created: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getMaker(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { maker: string }>;

    hashesOfFromToken(
      fromToken: string,
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    hashesOfMaker(
      maker: string,
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    hashesOfToToken(
      toToken: string,
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    numberOfAllHashes(overrides?: CallOverrides): Promise<[BigNumber]>;

    numberOfHashesOfFromToken(
      fromToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    numberOfHashesOfMaker(
      maker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    numberOfHashesOfToToken(
      toToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    orderOfHash(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        number,
        string,
        string
      ] & {
        maker: string;
        fromToken: string;
        toToken: string;
        amountIn: BigNumber;
        amountOutMin: BigNumber;
        recipient: string;
        deadline: BigNumber;
        created: BigNumber;
        v: number;
        r: string;
        s: string;
      }
    >;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  allHashes(
    page: BigNumberish,
    limit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  createOrder(
    order: {
      maker: string;
      fromToken: string;
      toToken: string;
      amountIn: BigNumberish;
      amountOutMin: BigNumberish;
      recipient: string;
      deadline: BigNumberish;
      created: BigNumberish;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getMaker(hash: BytesLike, overrides?: CallOverrides): Promise<string>;

  hashesOfFromToken(
    fromToken: string,
    page: BigNumberish,
    limit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  hashesOfMaker(
    maker: string,
    page: BigNumberish,
    limit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  hashesOfToToken(
    toToken: string,
    page: BigNumberish,
    limit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  numberOfAllHashes(overrides?: CallOverrides): Promise<BigNumber>;

  numberOfHashesOfFromToken(
    fromToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  numberOfHashesOfMaker(
    maker: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  numberOfHashesOfToToken(
    toToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  orderOfHash(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      number,
      string,
      string
    ] & {
      maker: string;
      fromToken: string;
      toToken: string;
      amountIn: BigNumber;
      amountOutMin: BigNumber;
      recipient: string;
      deadline: BigNumber;
      created: BigNumber;
      v: number;
      r: string;
      s: string;
    }
  >;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    allHashes(
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    createOrder(
      order: {
        maker: string;
        fromToken: string;
        toToken: string;
        amountIn: BigNumberish;
        amountOutMin: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        created: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    getMaker(hash: BytesLike, overrides?: CallOverrides): Promise<string>;

    hashesOfFromToken(
      fromToken: string,
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    hashesOfMaker(
      maker: string,
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    hashesOfToToken(
      toToken: string,
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    numberOfAllHashes(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfHashesOfFromToken(
      fromToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfHashesOfMaker(
      maker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfHashesOfToToken(
      toToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orderOfHash(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        number,
        string,
        string
      ] & {
        maker: string;
        fromToken: string;
        toToken: string;
        amountIn: BigNumber;
        amountOutMin: BigNumber;
        recipient: string;
        deadline: BigNumber;
        created: BigNumber;
        v: number;
        r: string;
        s: string;
      }
    >;
  };

  filters: {
    "OrderCreated(bytes32)"(
      hash?: BytesLike | null
    ): TypedEventFilter<[string], { hash: string }>;

    OrderCreated(
      hash?: BytesLike | null
    ): TypedEventFilter<[string], { hash: string }>;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    allHashes(
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createOrder(
      order: {
        maker: string;
        fromToken: string;
        toToken: string;
        amountIn: BigNumberish;
        amountOutMin: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        created: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getMaker(hash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    hashesOfFromToken(
      fromToken: string,
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashesOfMaker(
      maker: string,
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashesOfToToken(
      toToken: string,
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfAllHashes(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfHashesOfFromToken(
      fromToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfHashesOfMaker(
      maker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfHashesOfToToken(
      toToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orderOfHash(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allHashes(
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createOrder(
      order: {
        maker: string;
        fromToken: string;
        toToken: string;
        amountIn: BigNumberish;
        amountOutMin: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        created: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getMaker(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashesOfFromToken(
      fromToken: string,
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashesOfMaker(
      maker: string,
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashesOfToToken(
      toToken: string,
      page: BigNumberish,
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfAllHashes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numberOfHashesOfFromToken(
      fromToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfHashesOfMaker(
      maker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfHashesOfToToken(
      toToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orderOfHash(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
