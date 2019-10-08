import easyDate from '../src/lib/easyDate'

var assert = require('assert')
var chai = require('chai')
chai.should()
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

/* eslint-disable no-undef, node/no-deprecated-api, camelcase */
describe('easy date 测试', () => {
  it('测试', () => {
    let date = easyDate.parse(1559020937000)
    let dateString = easyDate.format(date, 'yyyy-MM-dd HH:mm:ss')
    assert.deepEqual(dateString, '2019-05-28 13:22:17')
  })
  it('测试2', () => {
    let date = easyDate.parse(1559020937000)
    let dateString = easyDate.format(date, 'yy-M-d H:m:s')
    assert.deepEqual(dateString, '19-5-28 13:22:17')
  })
  it('测试3', () => {
    let date = easyDate.parse(1559020937000)
    let dateString = easyDate.format(date, 'yyyy/MM/dd H:m:s')
    assert.deepEqual(dateString, '2019/05/28 13:22:17')
  })
  it('测试4', () => {
    let date = easyDate.parse(1559020937000)
    let dateString = easyDate.format(date, 'yyyy/MM/dd')
    assert.deepEqual(dateString, '2019/05/28')
  })
})
