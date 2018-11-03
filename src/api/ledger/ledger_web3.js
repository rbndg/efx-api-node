const LedgerWeb3 = require('ethfinex-ledger-subprovider')
module.exports = async (efx, Web3, options) => {
  return LedgerWeb3(Web3, options)
}
