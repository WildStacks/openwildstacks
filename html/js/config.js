var config = {
    apiUrl: "http://127.0.0.1:1984/",
    mainnetExplorerUrl: "https://explorer.wildstacks.net/",
    testnetExplorerUrl: "https://testnet.wildstacks.net/",
    stagenetExplorerUrl: "http://stagenet.wildstacks.net/",
    nettype: 2, /* 0 - MAINNET, 1 - TESTNET, 2 - STAGENET */
    coinUnitPlaces: 12,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Wildstacks
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Wildstacks
    coinSymbol: 'WSTS',
    openAliasPrefix: "wsts",
    coinName: 'WildStacks',
    coinUriPrefix: 'wildstacks:',
    addressPrefix: 19506,
    integratedAddressPrefix: 1134002,
    subAddressPrefix: 1527730,
    addressPrefixTestnet: 71986,
    integratedAddressPrefixTestnet: 23346,
    subAddressPrefixTestnet: 23858,
    addressPrefixStagenet: 1956,
    integratedAddressPrefixStagenet: 113002,
    subAddressPrefixStagenet: 152730,
    feePerKB: new JSBigInt('2000000000'),//20^10 - not used anymore, as fee is dynamic.
    dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 10, // minimum mixin for hardfork v8 is 10 (ring size 11)
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 60,
    debugMode: false
};
