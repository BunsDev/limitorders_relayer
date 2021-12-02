/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OrderBookSwapProxy,
  OrderBookSwapProxyInterface,
} from "../OrderBookSwapProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_oldImplementation",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newImplementation",
        type: "address",
      },
    ],
    name: "ImplementationChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProxyOwner",
    outputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        internalType: "address",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "toToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "created",
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
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
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
        name: "_implementation",
        type: "address",
      },
    ],
    name: "setImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setProxyOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006b565b6000805462010000600160b01b031916620100006001600160a01b0384169081029190911782556040519293509160008051602061091a833981519152908290a3506100663361006f565b61010e565b3390565b6001600160a01b0381166100b45760405162461bcd60e51b815260040180806020018281038252602581526020018061093a6025913960400191505060405180910390fd5b6001600160a01b0381166100c66100fb565b6001600160a01b031660008051602061091a83398151915260405160405180910390a36000805160206108fa83398151915255565b6000805160206108fa8339815191525490565b6107dd8061011d6000396000f3fe60806040526004361061007f5760003560e01c8063bceb45db1161004e578063bceb45db1461011a578063caaee91c146101c7578063d784d426146101fa578063f2fde38b1461022d5761008e565b80631ab7710d146100965780638da5cb5b146100c75780638f32d59b146100dc578063aaf10f42146101055761008e565b3661008e5761008c610260565b005b61008c610260565b3480156100a257600080fd5b506100ab6102d6565b604080516001600160a01b039092168252519081900360200190f35b3480156100d357600080fd5b506100ab6102fb565b3480156100e857600080fd5b506100f1610310565b604080519115158252519081900360200190f35b34801561011157600080fd5b506100ab61033a565b34801561012657600080fd5b506101446004803603602081101561013d57600080fd5b503561035f565b604051808c6001600160a01b031681526020018b6001600160a01b031681526020018a6001600160a01b03168152602001898152602001888152602001876001600160a01b031681526020018681526020018581526020018460ff1681526020018381526020018281526020019b50505050505050505050505060405180910390f35b3480156101d357600080fd5b5061008c600480360360208110156101ea57600080fd5b50356001600160a01b03166103ce565b34801561020657600080fd5b5061008c6004803603602081101561021d57600080fd5b50356001600160a01b031661043f565b34801561023957600080fd5b5061008c6004803603602081101561025057600080fd5b50356001600160a01b03166104ad565b600061026a61033a565b90506001600160a01b0381166102b15760405162461bcd60e51b81526004018080602001828103825260238152602001806107606023913960400191505060405180910390fd5b60405136600082376000803683855af43d806000843e8180156102d2578184f35b8184fd5b7fb5f6074d2b374487ffe12d401cf0891c7591a84c4944ef117f69d13b80c4d6d85490565b6000546201000090046001600160a01b031690565b600080546201000090046001600160a01b031661032b6104fe565b6001600160a01b031614905090565b7f950d7e977b74051843ed988c77d53a700cd967d2ac5480d98dd4c1edaf0b4dc85490565b600660208190526000918252604090912080546001820154600283015460038401546004850154600586015496860154600787015460088801546009890154600a909901546001600160a01b039889169a97891699968916989597949695909416949293919260ff909116918b565b6103d66102d6565b6001600160a01b0316336001600160a01b031614610433576040805162461bcd60e51b8152602060048201526015602482015274141c9bde1e4e8e881858d8d95cdcc819195b9a5959605a1b604482015290519081900360640190fd5b61043c81610502565b50565b6104476102d6565b6001600160a01b0316336001600160a01b0316146104a4576040805162461bcd60e51b8152602060048201526015602482015274141c9bde1e4e8e881858d8d95cdcc819195b9a5959605a1b604482015290519081900360640190fd5b61043c816105b2565b6104b5610310565b6104f5576040805162461bcd60e51b815260206004820152600c60248201526b1d5b985d5d1a1bdc9a5e995960a21b604482015290519081900360640190fd5b61043c81610662565b3390565b6001600160a01b0381166105475760405162461bcd60e51b81526004018080602001828103825260258152602001806107836025913960400191505060405180910390fd5b806001600160a01b03166105596102d6565b6001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a37fb5f6074d2b374487ffe12d401cf0891c7591a84c4944ef117f69d13b80c4d6d855565b6001600160a01b0381166105f75760405162461bcd60e51b81526004018080602001828103825260298152602001806107376029913960400191505060405180910390fd5b806001600160a01b031661060961033a565b6001600160a01b03167fcfbf4028add9318bbf716f08c348595afb063b0e9feed1f86d33681a4b3ed4d360405160405180910390a37f950d7e977b74051843ed988c77d53a700cd967d2ac5480d98dd4c1edaf0b4dc855565b6001600160a01b0381166106a75760405162461bcd60e51b81526004018080602001828103825260268152602001806107116026913960400191505060405180910390fd5b600080546040516001600160a01b03808516936201000090930416917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b03909216620100000262010000600160b01b031990921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737350726f78793a3a736574496d706c656d656e746174696f6e3a20696e76616c6964206164647265737350726f78793a3a28293a20696d706c656d656e746174696f6e206e6f7420666f756e6450726f78793a3a73657450726f78794f776e65723a20696e76616c69642061646472657373a2646970667358221220bc65b86ab02ad942f3afaeca23974ecd120ed39ad275265cc6e46368dcf4e47c64736f6c634300060c0033b5f6074d2b374487ffe12d401cf0891c7591a84c4944ef117f69d13b80c4d6d88be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e050726f78793a3a73657450726f78794f776e65723a20696e76616c69642061646472657373";

export class OrderBookSwapProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OrderBookSwapProxy> {
    return super.deploy(overrides || {}) as Promise<OrderBookSwapProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OrderBookSwapProxy {
    return super.attach(address) as OrderBookSwapProxy;
  }
  connect(signer: Signer): OrderBookSwapProxy__factory {
    return super.connect(signer) as OrderBookSwapProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OrderBookSwapProxyInterface {
    return new utils.Interface(_abi) as OrderBookSwapProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OrderBookSwapProxy {
    return new Contract(address, _abi, signerOrProvider) as OrderBookSwapProxy;
  }
}