const txDecoder = require('ethereum-tx-decoder')
const Tx = require('ethereumjs-tx')

module.exports = async (efx, toSign, path) => {
  const rawTx = txDecoder.decodeTx(toSign)

  const ledgerTx = await efx.ledgerTransport.signTransaction(toSign, path)

  efx.set('resetRequestCount', !efx.get('resetRequestCount'))

  const signedRawTx = new Tx({
    ...rawTx,
    v: `0x${ledgerTx.v}`,
    r: `0x${ledgerTx.r}`,
    s: `0x${ledgerTx.s}`
  })

  return signedRawTx.serialize().toString('hex')
}
