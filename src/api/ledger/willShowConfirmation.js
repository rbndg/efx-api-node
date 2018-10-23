
module.exports = async (efx, toSign, path) => {
  return efx.ledgerTransport.willShowConfirmation(toSign, path)
}
