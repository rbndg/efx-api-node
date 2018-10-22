
module.exports = async (efx, toSign, path) => {
  const eth = await efx.ledger.transport()
  console.log('eth.willShowConfirmation')
  const willShowConfirmation = await eth.willShowConfirmation(toSign, path)
  return willShowConfirmation
}
