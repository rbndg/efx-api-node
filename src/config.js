module.exports = {

  // test environment 'https://test.ethfinex.com/trustless/v1',
  api: 'https://api.ethfinex.com/trustless/v1',

  // default expiration time for orders in seconds, used by create_order.js
  defaultExpiry: 3600,

  // in case no provider is provided we will try connecting to the this default
  // address
  defaultProvider: 'http://192.168.255.6:8545',

  // Ethereum Network Id
  ethNetworkId: 1,
  // default account to select in case no account is provided by the userConfig
  // parameter
  account: 0,

  // Use Ledger to sign transactions
  isLedger: true,
  // Ledger path for account
  ledgerPath: "44'/60'/0'"

}
