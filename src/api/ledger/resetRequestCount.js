
module.exports = async (efx) => {
  const showConfirmation = await efx.ledgerTransport.resetRequestCount()
  return showConfirmation
}
