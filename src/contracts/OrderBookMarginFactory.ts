/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OrderBookMargin,
  OrderBookMarginInterface,
} from "./OrderBookMargin";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "OrderCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "page",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "allHashes",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "loanId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "leverageAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "loanTokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "loanTokenSent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralTokenSent",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "collateralTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "trader",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minReturn",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "loanDataBytes",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createdTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct MarginOrders.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "createOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "getTrader",
    outputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "page",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "hashesOfCollateralToken",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "page",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "hashesOfTrader",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfAllHashes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
    ],
    name: "numberOfHashesOfCollateralToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "numberOfHashesOfTrader",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "orderOfHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "loanId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "leverageAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "loanTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "loanTokenSent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralTokenSent",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collateralTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minReturn",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "loanDataBytes",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "createdTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051469061008c907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f907fc3d2193d7dc1c02a389e4c7ff50299645338a7ae45c7a25b141b7be6720567cf907fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc690859030906020016100ad565b60408051601f198184030181529190528051602090910120608052506100d9565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b608051610fa16100f86000398061019952806101de5250610fa16000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063ac8216c511610066578063ac8216c514610111578063bceb45db14610124578063c6e0932814610151578063da5c207814610164578063df4c1b41146101845761009e565b80633644e515146100a357806375af1c36146100c15780637a364b90146100c95780637c4cc539146100de578063a9f1e2b5146100f1575b600080fd5b6100ab610197565b6040516100b89190610c96565b60405180910390f35b6100ab6101bb565b6100dc6100d7366004610b28565b6101c1565b005b6100ab6100ec366004610ac2565b610422565b6101046100ff366004610add565b61043d565b6040516100b89190610c52565b6100ab61011f366004610ac2565b6104cf565b610137610132366004610b10565b6104ea565b6040516100b89e9d9c9b9a99989796959493929190610d04565b61010461015f366004610add565b61056c565b610177610172366004610b10565b6105f4565b6040516100b89190610c3e565b610104610192366004610bfb565b6106c7565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005490565b6101ca81610735565b60006101d58261084b565b905060006102157f000000000000000000000000000000000000000000000000000000000000000083856101600151866101800151876101a001516108de565b90506001600160a01b0381161580159061024457508260c001516001600160a01b0316816001600160a01b0316145b6102695760405162461bcd60e51b815260040161026090610e57565b60405180910390fd5b6000828152600360205260409020600601546001600160a01b0316156102a15760405162461bcd60e51b815260040161026090610da9565b6000828152600360208181526040808420875181558783015160018083019190915588830151600280840180546001600160a01b03199081166001600160a01b039485161790915560608c01519785019790975560808b0151600485015560a08b0180516005860180548a1691851691909117905560c08c018051600687018054909a169085161790985560e08c015160078601556101008c015160088601556101208c015160098601556101408c0151600a8601556101608c0151600b8601805460ff191660ff9092169190911790556101808c0151600c8601556101a08c0151600d90950194909455875480840189558880527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563018a90559551811687528185528387208054808401825590885285882001899055915190911685529282528084208054938401815584529083209091018490555183917f918554b6bd6e2895ce6553de5de0e1a69db5289aa0e4fe193a0dcd1f1434747791a2505050565b6001600160a01b031660009081526001602052604090205490565b60606104c7838360026000886001600160a01b03166001600160a01b031681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156104b357602002820191906000526020600020905b81548152602001906001019080831161049f575b50505050506109679092919063ffffffff16565b949350505050565b6001600160a01b031660009081526002602052604090205490565b600360208190526000918252604090912080546001820154600283015493830154600484015460058501546006860154600787015460088801546009890154600a8a0154600b8b0154600c8c0154600d909c01549a9c999b6001600160a01b039a8b169b999a98999789169890961696949593949293919260ff90911691908e565b60606104c7838360016000886001600160a01b03166001600160a01b031681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156104b3576020028201919060005260206000209081548152602001906001019080831161049f5750505050506109679092919063ffffffff16565b60006105fe610a26565b505060009081526003602081815260409283902083516101c0810185528154815260018201549281019290925260028101546001600160a01b0390811694830194909452918201546060820152600482015460808201526005820154831660a0820152600682015490921660c08301819052600782015460e084015260088201546101008401526009820154610120840152600a820154610140840152600b82015460ff16610160840152600c820154610180840152600d909101546101a09092019190915290565b606061072c838360008054806020026020016040519081016040528092919081815260200182805480156104b3576020028201919060005260206000209081548152602001906001019080831161049f5750505050506109679092919063ffffffff16565b90505b92915050565b60c08101516001600160a01b031661075f5760405162461bcd60e51b815260040161026090610e2f565b60408101516001600160a01b03166107895760405162461bcd60e51b815260040161026090610eae565b60008160200151116107ad5760405162461bcd60e51b815260040161026090610df8565b60a08101516001600160a01b03166107d75760405162461bcd60e51b815260040161026090610ee5565b60008160e00151116107fb5760405162461bcd60e51b815260040161026090610e82565b428161012001511161081f5760405162461bcd60e51b815260040161026090610f1a565b610384420381610140015110156108485760405162461bcd60e51b815260040161026090610dcf565b50565b80516020808301516040808501516060860151608087015160a088015160c089015160e08a01516101008b01516101208c01516101408d0151985160009c6108c19c7fe30dcb91507ed7c8a9a2019b56e407eee8294529022e84f18b5420374e1784049c919b919a999897969594939201610c9f565b604051602081830303815290604052805190602001209050919050565b60008086866040516020016108f4929190610c23565b6040516020818303038152906040528051906020012090506001818686866040516000815260200160405260405161092f9493929190610d8b565b6020604051602081039080840390855afa158015610951573d6000803e3d6000fd5b5050604051601f19015198975050505050505050565b60608167ffffffffffffffff8111801561098057600080fd5b506040519080825280602002602001820160405280156109aa578160200160208202803683370190505b50905060005b82811015610a1e5784518184860201106109e5576000801b8282815181106109d457fe5b602002602001018181525050610a16565b848184860201815181106109f557fe5b6020026020010151828281518110610a0957fe5b6020026020010181815250505b6001016109b0565b509392505050565b604080516101c081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081019190915290565b80356001600160a01b038116811461072f57600080fd5b803560ff8116811461072f57600080fd5b600060208284031215610ad3578081fd5b61072c8383610a9a565b600080600060608486031215610af1578182fd5b610afb8585610a9a565b95602085013595506040909401359392505050565b600060208284031215610b21578081fd5b5035919050565b60006101c0808385031215610b3b578182fd5b610b4481610f44565b90508235815260208301356020820152610b618460408501610a9a565b60408201526060830135606082015260808301356080820152610b878460a08501610a9a565b60a0820152610b998460c08501610a9a565b60c082015260e08381013590820152610100808401359082015261012080840135908201526101408084013590820152610160610bd885828601610ab1565b9082015261018083810135908201526101a0928301359281019290925250919050565b60008060408385031215610c0d578182fd5b50508035926020909101359150565b60ff169052565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b81811015610c8a57835183529284019291840191600101610c6e565b50909695505050505050565b90815260200190565b9b8c5260208c019a909a5260408b01989098526001600160a01b0396871660608b015260808a019590955260a089019390935290841660c088015290921660e08601526101008501919091526101208401526101408301526101608201526101800190565b8e8152602081018e90526001600160a01b038d81166040830152606082018d9052608082018c90528a811660a0830152891660c082015260e081018890526101008101879052610120810186905261014081018590526101c08101610d6d610160830186610c1c565b6101808201939093526101a001529c9b505050505050505050505050565b93845260ff9290921660208401526040830152606082015260800190565b6020808252600c908201526b6f726465722d65786973747360a01b604082015260600190565b6020808252600f908201526e1a5b9d985b1a590b58dc99585d1959608a1b604082015260600190565b60208082526017908201527f696e76616c69642d6c657665726167652d616d6f756e74000000000000000000604082015260600190565b6020808252600e908201526d34b73b30b634b216ba3930b232b960911b604082015260600190565b602080825260119082015270696e76616c69642d7369676e617475726560781b604082015260600190565b60208082526012908201527134b73b30b634b216b6b4b716b932ba3ab93760711b604082015260600190565b6020808252601a908201527f696e76616c69642d6c6f616e2d746f6b656e2d61646472657373000000000000604082015260600190565b6020808252818101527f696e76616c69642d636f6c6c61746572616c2d746f6b656e2d61646472657373604082015260600190565b60208082526010908201526f696e76616c69642d646561646c696e6560801b604082015260600190565b60405181810167ffffffffffffffff81118282101715610f6357600080fd5b60405291905056fea26469706673582212200ddbd8716da338300dcebb9bdf9745b15fe88a964447cf34378dada0afb65f7a64736f6c634300060c0033";

export class OrderBookMarginFactory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OrderBookMargin> {
    return super.deploy(overrides || {}) as Promise<OrderBookMargin>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OrderBookMargin {
    return super.attach(address) as OrderBookMargin;
  }
  connect(signer: Signer): OrderBookMarginFactory {
    return super.connect(signer) as OrderBookMarginFactory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OrderBookMarginInterface {
    return new utils.Interface(_abi) as OrderBookMarginInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OrderBookMargin {
    return new Contract(address, _abi, signerOrProvider) as OrderBookMargin;
  }
}
