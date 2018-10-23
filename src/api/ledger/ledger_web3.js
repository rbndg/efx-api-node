const ProviderEngine = require('web3-provider-engine')
const FetchSubprovider = require('web3-provider-engine/subproviders/fetch')
const TransportU2F = require('@ledgerhq/hw-transport-u2f')
const createLedgerSubprovider = require('@ledgerhq/web3-subprovider')

module.exports = async (Web3, rpcUrl, networkId) => {
  const engine = new ProviderEngine()
  const getTransport = () => TransportU2F.create()
  const ledger = createLedgerSubprovider(getTransport, {
    networkId,
    accountsLength: 5
  })
  engine.addProvider(ledger)
  engine.addProvider(new FetchSubprovider({ rpcUrl }))
  engine.start()
  return new Web3(engine)
}
