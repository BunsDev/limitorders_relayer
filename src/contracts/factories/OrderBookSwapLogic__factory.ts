/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OrderBookSwapLogic,
  OrderBookSwapLogicInterface,
} from "../OrderBookSwapLogic";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        components: [
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
        indexed: false,
        internalType: "struct Orders.Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "OrderCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
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
        internalType: "struct Orders.Order",
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
    name: "getMaker",
    outputs: [
      {
        internalType: "address",
        name: "maker",
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
        name: "maker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "getOrders",
    outputs: [
      {
        components: [
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
        internalType: "struct Orders.Order[]",
        name: "orders",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fromToken",
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
    name: "hashesOfFromToken",
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
        name: "maker",
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
    name: "hashesOfMaker",
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
        name: "toToken",
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
    name: "hashesOfToToken",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "fromToken",
        type: "address",
      },
    ],
    name: "numberOfHashesOfFromToken",
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
        name: "maker",
        type: "address",
      },
    ],
    name: "numberOfHashesOfMaker",
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
        name: "toToken",
        type: "address",
      },
    ],
    name: "numberOfHashesOfToToken",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b610074565b6000805462010000600160b01b031916620100006001600160a01b038416908102919091178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350610078565b3390565b611a41806100876000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806375af1c3611610097578063b76b147111610066578063b76b147114610209578063bceb45db1461021c578063df4c1b4114610246578063f2fde38b1461025957610100565b806375af1c36146101da5780638129fc1c146101e25780638da5cb5b146101ec5780638f32d59b146101f457610100565b806327b62ad9116100d357806327b62ad9146101815780633d91efcf146101a15780635fd45d24146101b457806365f7a551146101c757610100565b806303e0992f146101055780630777aa321461012e578063089f14c61461014157806314eaa86814610161575b600080fd5b6101186101133660046112a0565b61026c565b60405161012591906119db565b60405180910390f35b61011861013c3660046112a0565b610287565b61015461014f3660046112ee565b6102a2565b60405161012591906114a8565b61017461016f3660046112bb565b610355565b6040516101259190611526565b61019461018f3660046112bb565b6103e7565b604051610125919061156a565b6101186101af3660046112a0565b6105a3565b6101746101c23660046112bb565b6105be565b6101746101d53660046112bb565b610646565b6101186106ce565b6101ea6106d4565b005b61015461080d565b6101fc610822565b60405161012591906115ad565b6101ea610217366004611306565b61084c565b61022f61022a3660046112ee565b610b64565b6040516101259b9a999897969594939291906114bc565b6101746102543660046113c0565b610bd3565b6101ea6102673660046112a0565b610c41565b6001600160a01b031660009081526004602052604090205490565b6001600160a01b031660009081526003602052604090205490565b60006102ac61121c565b505060009081526006602081815260409283902083516101608101855281546001600160a01b03908116808352600184015482169483019490945260028301548116958201959095526003820154606082015260048201546080820152600582015490941660a08501529182015460c0840152600782015460e0840152600882015460ff166101008401526009820154610120840152600a909101546101409092019190915290565b60606103df838360046000886001600160a01b03166001600160a01b031681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156103cb57602002820191906000526020600020905b8154815260200190600101908083116103b7575b5050505050610c6e9092919063ffffffff16565b949350505050565b60608167ffffffffffffffff8111801561040057600080fd5b5060405190808252806020026020018201604052801561043a57816020015b61042761121c565b81526020019060019003908161041f5790505b506001600160a01b0385166000908152600360209081526040918290208054835181840281018401909452808452939450606093909183018282801561049f57602002820191906000526020600020905b81548152602001906001019080831161048b575b5050505050905060005b8381101561059a578151858201101561059257600082868301815181106104cc57fe5b6020908102919091018101516000818152600680845260409182902082516101608101845281546001600160a01b039081168252600183015481169682019690965260028201548616938101939093526003810154606084015260048101546080840152600581015490941660a083015283015460c0820152600783015460e0820152600883015460ff166101008201526009830154610120820152600a90920154610140830152855190925085908490811061058557fe5b6020026020010181905250505b6001016104a9565b50509392505050565b6001600160a01b031660009081526005602052604090205490565b60606103df838360036000886001600160a01b03166001600160a01b031681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156103cb57602002820191906000526020600020908154815260200190600101908083116103b7575050505050610c6e9092919063ffffffff16565b60606103df838360056000886001600160a01b03166001600160a01b031681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156103cb57602002820191906000526020600020908154815260200190600101908083116103b7575050505050610c6e9092919063ffffffff16565b60025490565b6106dc610822565b6107015760405162461bcd60e51b81526004016106f8906118fb565b60405180910390fd5b600054610100900460ff168061071a575060005460ff16155b6107365760405162461bcd60e51b81526004016106f89061186b565b600054610100900460ff16158015610761576000805460ff1961ff0019909116610100171660011790555b60405146906107dc907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f907f84ec3e40ac87b7e93d40b42ac60cbcf224a757106614dac5eb0cc5fc9be1f03c907fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc69085903090602001611605565b60408051601f19818403018152919052805160209091012060015550801561080a576000805461ff00191690555b50565b6000546201000090046001600160a01b031690565b600080546201000090046001600160a01b031661083d610d16565b6001600160a01b031614905090565b61085581610d1a565b600061086082610e8c565b9050600061088260015483856101000151866101200151876101400151610f0c565b9050610892818460000151610f32565b6108ae5760405162461bcd60e51b81526004016106f8906117ce565b6000828152600660205260409020546001600160a01b0316156108e35760405162461bcd60e51b81526004016106f890611686565b826006600084815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060408201518160020160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550606082015181600301556080820151816004015560a08201518160050160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060c0820151816006015560e082015181600701556101008201518160080160006101000a81548160ff021916908360ff160217905550610120820151816009015561014082015181600a015590505060028290806001815401808255809150506001900390600052602060002001600090919091909150556003600084600001516001600160a01b03166001600160a01b031681526020019081526020016000208290806001815401808255809150506001900390600052602060002001600090919091909150556004600084602001516001600160a01b03166001600160a01b031681526020019081526020016000208290806001815401808255809150506001900390600052602060002001600090919091909150556005600084604001516001600160a01b03166001600160a01b03168152602001908152602001600020829080600181540180825580915050600190039060005260206000200160009091909190915055817f2aae6c6e33262ab71a02845b9b1f4266006a6cdc0aeafd165b9549c05a62607b84604051610b5791906119cc565b60405180910390a2505050565b600660208190526000918252604090912080546001820154600283015460038401546004850154600586015496860154600787015460088801546009890154600a909901546001600160a01b039889169a97891699968916989597949695909416949293919260ff909116918b565b6060610c38838360028054806020026020016040519081016040528092919081815260200182805480156103cb57602002820191906000526020600020908154815260200190600101908083116103b7575050505050610c6e9092919063ffffffff16565b90505b92915050565b610c49610822565b610c655760405162461bcd60e51b81526004016106f8906118fb565b61080a81610f89565b60608167ffffffffffffffff81118015610c8757600080fd5b50604051908082528060200260200182016040528015610cb1578160200160208202803683370190505b50905060005b82811015610d0e57845181848602011015610d015784818486020181518110610cdc57fe5b6020026020010151828281518110610cf057fe5b602002602001018181525050610d06565b610d0e565b600101610cb7565b509392505050565b3390565b80516001600160a01b0316610d415760405162461bcd60e51b81526004016106f8906117a7565b60208101516001600160a01b0316610d6b5760405162461bcd60e51b81526004016106f8906119a0565b60408101516001600160a01b0316610d955760405162461bcd60e51b81526004016106f890611737565b80604001516001600160a01b031681602001516001600160a01b03161415610dcf5760405162461bcd60e51b81526004016106f890611921565b6000816060015111610df35760405162461bcd60e51b81526004016106f890611975565b6000816080015111610e175760405162461bcd60e51b81526004016106f89061183b565b60a08101516001600160a01b0316610e415760405162461bcd60e51b81526004016106f8906116ac565b61012c42038160e001511015610e695760405162461bcd60e51b81526004016106f8906116d7565b428160c001511161080a5760405162461bcd60e51b81526004016106f89061194b565b60007fd6dcdb8a8034d5997072fdf38e109521eb631713bc0470668aa787bb502b623c826000015183602001518460400151856060015186608001518760a001518860c001518960e00151604051602001610eef999897969594939291906115b8565b604051602081830303815290604052805190602001209050919050565b600080610f198787611018565b9050610f278186868661104b565b979650505050505050565b6000816001600160a01b0316836001600160a01b0316148015610f72575073dcc703c0e500b653ca82273b7bfad8045d85a4706001600160a01b03841614155b8015610c38575050506001600160a01b0316151590565b6001600160a01b038116610faf5760405162461bcd60e51b81526004016106f890611761565b600080546040516001600160a01b03808516936201000090930416917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b03909216620100000262010000600160b01b0319909216919091179055565b6000828260405160200161102d92919061148d565b60405160208183030381529060405280519060200120905092915050565b600080600061105c87878787611073565b9150915061106981611153565b5095945050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156110aa575060009050600361114a565b8460ff16601b141580156110c257508460ff16601c14155b156110d3575060009050600461114a565b6000600187878787604051600081526020016040526040516110f89493929190611631565b6020604051602081039080840390855afa15801561111a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166111435760006001925092505061114a565b9150600090505b94509492505050565b600081600481111561116157fe5b141561116c5761080a565b600181600481111561117a57fe5b14156111985760405162461bcd60e51b81526004016106f89061164f565b60028160048111156111a657fe5b14156111c45760405162461bcd60e51b81526004016106f890611700565b60038160048111156111d257fe5b14156111f05760405162461bcd60e51b81526004016106f8906117f9565b60048160048111156111fe57fe5b141561080a5760405162461bcd60e51b81526004016106f8906118b9565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915290565b80356001600160a01b0381168114610c3b57600080fd5b803560ff81168114610c3b57600080fd5b6000602082840312156112b1578081fd5b610c388383611278565b6000806000606084860312156112cf578182fd5b6112d98585611278565b95602085013595506040909401359392505050565b6000602082840312156112ff578081fd5b5035919050565b6000610160808385031215611319578182fd5b611322816119e4565b905061132e8484611278565b815261133d8460208501611278565b602082015261134f8460408501611278565b604082015260608301356060820152608083013560808201526113758460a08501611278565b60a082015260c083013560c082015260e083013560e082015261010061139d8582860161128f565b908201526101208381013590820152610140928301359281019290925250919050565b600080604083850312156113d2578182fd5b50508035926020909101359150565b6001600160a01b03169052565b6113f98282516113e1565b602081015161140b60208401826113e1565b50604081015161141e60408401826113e1565b50606081015160608301526080810151608083015260a081015161144560a08401826113e1565b5060c081015160c083015260e081015160e08301526101008082015161146d82850182611486565b5050610120818101519083015261014090810151910152565b60ff169052565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b039b8c168152998b1660208b0152978a1660408a0152606089019690965260808801949094529190961660a086015260c085019590955260e084019490945260ff9093166101008301526101208201929092526101408101919091526101600190565b6020808252825182820181905260009190848201906040850190845b8181101561155e57835183529284019291840191600101611542565b50909695505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561155e576115998385516113ee565b928401926101609290920191600101611586565b901515815260200190565b9889526001600160a01b0397881660208a015295871660408901529386166060880152608087019290925260a086015290921660c084015260e08301919091526101008201526101200190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b6020808252600c908201526b6f726465722d65786973747360a01b604082015260600190565b6020808252601190820152701a5b9d985b1a590b5c9958da5c1a595b9d607a1b604082015260600190565b6020808252600f908201526e1a5b9d985b1a590b58dc99585d1959608a1b604082015260600190565b6020808252601f908201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604082015260600190565b60208082526010908201526f34b73b30b634b216ba3796ba37b5b2b760811b604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252600d908201526c34b73b30b634b216b6b0b5b2b960991b604082015260600190565b602080825260119082015270696e76616c69642d7369676e617475726560781b604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b60208082526016908201527534b73b30b634b216b0b6b7bab73a16b7baba16b6b4b760511b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252600c908201526b1d5b985d5d1a1bdc9a5e995960a21b604082015260600190565b60208082526010908201526f6475706c69636174652d746f6b656e7360801b604082015260600190565b60208082526010908201526f696e76616c69642d646561646c696e6560801b604082015260600190565b60208082526011908201527034b73b30b634b216b0b6b7bab73a16b4b760791b604082015260600190565b60208082526012908201527134b73b30b634b216b33937b696ba37b5b2b760711b604082015260600190565b6101608101610c3b82846113ee565b90815260200190565b60405181810167ffffffffffffffff81118282101715611a0357600080fd5b60405291905056fea2646970667358221220cfe9b7eba8eae8ca383300392f8729d90d74e92676b490b02ce74178fc830adf64736f6c634300060c0033";

export class OrderBookSwapLogic__factory extends ContractFactory {
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
  ): Promise<OrderBookSwapLogic> {
    return super.deploy(overrides || {}) as Promise<OrderBookSwapLogic>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OrderBookSwapLogic {
    return super.attach(address) as OrderBookSwapLogic;
  }
  connect(signer: Signer): OrderBookSwapLogic__factory {
    return super.connect(signer) as OrderBookSwapLogic__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OrderBookSwapLogicInterface {
    return new utils.Interface(_abi) as OrderBookSwapLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OrderBookSwapLogic {
    return new Contract(address, _abi, signerOrProvider) as OrderBookSwapLogic;
  }
}
