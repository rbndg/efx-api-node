
module.exports = async (efx) => {
  const eth = await efx.ledger.transport()
  console.log('eth.resetRequestCount')
  const showConfirmation = await eth.resetRequestCount()
  return showConfirmation
}
