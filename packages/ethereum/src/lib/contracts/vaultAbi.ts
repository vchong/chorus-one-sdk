export const VaultABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      }
    ],
    name: 'CheckpointCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'referrer',
        type: 'address'
      }
    ],
    name: 'Deposited',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionTicket',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      }
    ],
    name: 'ExitQueueEntered',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'prevPositionTicket',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newPositionTicket',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'withdrawnAssets',
        type: 'uint256'
      }
    ],
    name: 'ExitedAssetsClaimed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'feeRecipient',
        type: 'address'
      }
    ],
    name: 'FeeRecipientUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      }
    ],
    name: 'FeeSharesMinted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'keysManager',
        type: 'address'
      }
    ],
    name: 'KeysManagerUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'metadataIpfsHash',
        type: 'string'
      }
    ],
    name: 'MetadataUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      }
    ],
    name: 'OsTokenBurned',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'osTokenShares',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'receivedAssets',
        type: 'uint256'
      }
    ],
    name: 'OsTokenLiquidated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'referrer',
        type: 'address'
      }
    ],
    name: 'OsTokenMinted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'osTokenShares',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      }
    ],
    name: 'OsTokenRedeemed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      }
    ],
    name: 'Redeemed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes',
        name: 'publicKey',
        type: 'bytes'
      }
    ],
    name: 'ValidatorRegistered',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'validatorsRoot',
        type: 'bytes32'
      }
    ],
    name: 'ValidatorsRootUpdated',
    type: 'event'
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'osTokenShares',
        type: 'uint128'
      }
    ],
    name: 'burnOsToken',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'positionTicket',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'exitQueueIndex',
        type: 'uint256'
      }
    ],
    name: 'calculateExitedAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: 'leftShares',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'claimedShares',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'claimedAssets',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'capacity',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'positionTicket',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'exitQueueIndex',
        type: 'uint256'
      }
    ],
    name: 'claimExitedAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: 'newPositionTicket',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'claimedShares',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'claimedAssets',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      }
    ],
    name: 'convertToAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      }
    ],
    name: 'convertToShares',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'referrer',
        type: 'address'
      }
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      }
    ],
    name: 'enterExitQueue',
    outputs: [
      {
        internalType: 'uint256',
        name: 'positionTicket',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'feePercent',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'feeRecipient',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'positionTicket',
        type: 'uint256'
      }
    ],
    name: 'getExitQueueIndex',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'getShares',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'params',
        type: 'bytes'
      }
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'isStateUpdateRequired',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'keysManager',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'osTokenShares',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      }
    ],
    name: 'liquidateOsToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'mevEscrow',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'osTokenShares',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'referrer',
        type: 'address'
      }
    ],
    name: 'mintOsToken',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes[]',
        name: 'data',
        type: 'bytes[]'
      }
    ],
    name: 'multicall',
    outputs: [
      {
        internalType: 'bytes[]',
        name: 'results',
        type: 'bytes[]'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address'
      }
    ],
    name: 'osTokenPositions',
    outputs: [
      {
        internalType: 'uint128',
        name: 'shares',
        type: 'uint128'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'queuedShares',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'receiveFromMevEscrow',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      }
    ],
    name: 'redeem',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'osTokenShares',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      }
    ],
    name: 'redeemOsToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'validatorsRegistryRoot',
            type: 'bytes32'
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256'
          },
          {
            internalType: 'bytes',
            name: 'validators',
            type: 'bytes'
          },
          {
            internalType: 'bytes',
            name: 'signatures',
            type: 'bytes'
          },
          {
            internalType: 'string',
            name: 'exitSignaturesIpfsHash',
            type: 'string'
          }
        ],
        internalType: 'struct IKeeperValidators.ApprovalParams',
        name: 'keeperParams',
        type: 'tuple'
      },
      {
        internalType: 'bytes32[]',
        name: 'proof',
        type: 'bytes32[]'
      }
    ],
    name: 'registerValidator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'validatorsRegistryRoot',
            type: 'bytes32'
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256'
          },
          {
            internalType: 'bytes',
            name: 'validators',
            type: 'bytes'
          },
          {
            internalType: 'bytes',
            name: 'signatures',
            type: 'bytes'
          },
          {
            internalType: 'string',
            name: 'exitSignaturesIpfsHash',
            type: 'string'
          }
        ],
        internalType: 'struct IKeeperValidators.ApprovalParams',
        name: 'keeperParams',
        type: 'tuple'
      },
      {
        internalType: 'uint256[]',
        name: 'indexes',
        type: 'uint256[]'
      },
      {
        internalType: 'bool[]',
        name: 'proofFlags',
        type: 'bool[]'
      },
      {
        internalType: 'bytes32[]',
        name: 'proof',
        type: 'bytes32[]'
      }
    ],
    name: 'registerValidators',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_feeRecipient',
        type: 'address'
      }
    ],
    name: 'setFeeRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_keysManager',
        type: 'address'
      }
    ],
    name: 'setKeysManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'metadataIpfsHash',
        type: 'string'
      }
    ],
    name: 'setMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_validatorsRoot',
        type: 'bytes32'
      }
    ],
    name: 'setValidatorsRoot',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalShares',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'rewardsRoot',
            type: 'bytes32'
          },
          {
            internalType: 'int160',
            name: 'reward',
            type: 'int160'
          },
          {
            internalType: 'uint160',
            name: 'unlockedMevReward',
            type: 'uint160'
          },
          {
            internalType: 'bytes32[]',
            name: 'proof',
            type: 'bytes32[]'
          }
        ],
        internalType: 'struct IKeeperRewards.HarvestParams',
        name: 'harvestParams',
        type: 'tuple'
      }
    ],
    name: 'updateState',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'referrer',
        type: 'address'
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'rewardsRoot',
            type: 'bytes32'
          },
          {
            internalType: 'int160',
            name: 'reward',
            type: 'int160'
          },
          {
            internalType: 'uint160',
            name: 'unlockedMevReward',
            type: 'uint160'
          },
          {
            internalType: 'bytes32[]',
            name: 'proof',
            type: 'bytes32[]'
          }
        ],
        internalType: 'struct IKeeperRewards.HarvestParams',
        name: 'harvestParams',
        type: 'tuple'
      }
    ],
    name: 'updateStateAndDeposit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256'
      }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'validatorIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'validatorsRoot',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'vaultId',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [],
    name: 'version',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [],
    name: 'withdrawableAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const
