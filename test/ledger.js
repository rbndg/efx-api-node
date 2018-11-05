/* eslint-env mocha */
const instance = require('./instance')
const { assert } = require('chai')
const mockGetConf = require('./fixtures/nock/get_conf')

let efx

before(async () => {
  mockGetConf()
  efx = await instance()
})

it('efx.ledger.willConnect()', async () => {
  if (!efx.config.isLedger) {
    console.log('Skipping... not using ledger')
    return
  }
  const accounts = await efx.web3.eth.getAccounts()
  assert.ok(accounts.length > 0)
})
