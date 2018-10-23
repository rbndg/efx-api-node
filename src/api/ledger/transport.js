const TransportNodeHid = require('@ledgerhq/hw-transport-node-hid').default
const Eth = require('@ledgerhq/hw-app-eth').default

// Ledger will require a confirmation if resetRequestCount is called
const startInterval = (efx) => {
  return setInterval(() => {
    efx.ledger.resetRequestCount()
  }, 10000)
}

module.exports = async (efx) => {
  let transport

  try {
    transport = await TransportNodeHid.create()
  } catch (err) {
    console.log('FAILED_TO_CONNECT_TO_LEDGER')
    console.log(err)
    throw err
  }

  let requestInterval = startInterval(efx)
  efx.on('resetRequestCount', () => {
    clearInterval(requestInterval)
    requestInterval = startInterval()
  })

  return new Eth(transport)
}
