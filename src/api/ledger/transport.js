const TransportNodeHid = require('@ledgerhq/hw-transport-node-hid').default
const Eth = require('@ledgerhq/hw-app-eth').default

module.exports = async (efx) => {
  let transport

  try {
    transport = await TransportNodeHid.create()
  } catch (err) {
    console.log('FAILED_TO_CONNECT_TO_LEDGER')
    console.log(err)
    throw err
  }
  return new Eth(transport)
}
