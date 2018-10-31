const ProviderEngine = require('web3-provider-engine')
const FetchSubprovider = require('web3-provider-engine/subproviders/fetch')
const TransportNodeHid = require('@ledgerhq/hw-transport-node-hid').default
const createLedgerSubprovider = require('@ledgerhq/web3-subprovider').default

module.exports = async (efx, Web3, {networkId, rpcUrl}) => {
  const engine = new ProviderEngine()

  const getTransport = async () => {
    return TransportNodeHid.create()
  }

  const ledger = createLedgerSubprovider(getTransport, {
    networkId,
    accountsLength: 5,
  })
  engine.addProvider(ledger)
  engine.addProvider(new FetchSubprovider({ rpcUrl }))
  engine.start()
  return new Web3(engine)
}
