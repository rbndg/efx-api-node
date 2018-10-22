
module.exports = async (efx, toSign, path) => {
  const eth = await efx.ledger.transport()
  console.log('eth.signTransaction')
  const showConfirmation = await eth.signTransaction(toSign, path)
  return showConfirmation
}
