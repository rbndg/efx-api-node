/* eslint-env mocha */
const instance = require('./instance')
const { assert } = require('chai')
const mockGetConf = require('./fixtures/nock/get_conf')

let efx

before(async () => {
  mockGetConf()
  efx = await instance()
})

it('efx.ledger.willShowConfirmation()', async () => {
  const result = await efx.ledger.willShowConfirmation(efx)
  assert.ok(result.willShowConfirmation)
})
