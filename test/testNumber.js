import numberFormatter from '../src/lib/number'

var assert = require('assert')
var chai = require('chai')
chai.should()
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

/* eslint-disable no-undef, node/no-deprecated-api, camelcase */
describe('number格式化和解析测试', () => {
  it('测试格式化 1', () => {
    let a = 123456.789
    let res = numberFormatter.formatNumber(a, 2, ',')
    assert.strictEqual(res, '123,456.79')
  })
  it('测试格式化 2', () => {
    let a = 0.789
    let res = numberFormatter.formatNumber(a)
    assert.strictEqual(res, '0.789')
  })
  it('测试格式化 3', () => {
    let a = 123000000
    let res = numberFormatter.formatNumber(a)
    assert.strictEqual(res, '123,000,000')
  })

  it('测试解析 1', () => {
    let a = '123,456.79'
    let res = numberFormatter.parseNumber(a)
    assert.strictEqual(res, 123456.79)
  })
  it('测试解析 2', () => {
    let a = '123-456.79'
    let res = numberFormatter.parseNumber(a, '-')
    assert.strictEqual(res, 123456.79)
  })
  it('测试解析 3', () => {
    let a = '123,456,000'
    let res = numberFormatter.parseNumber(a, ',')
    assert.strictEqual(res, 123456000)
  })
  it('测试解析 4', () => {
    let a = '123456'
    let res = numberFormatter.parseNumber(a, ',')
    assert.strictEqual(res, 123456)
  })
  it('测试解析 5', () => {
    let a = '0.123'
    let res = numberFormatter.parseNumber(a, ',')
    assert.strictEqual(res, 0.123)
  })
  it('测试解析 6', () => {
    let a = '0.123'
    let res = numberFormatter.parseNumber(a, ',', 2)
    assert.strictEqual(res, 0.12)
  })
  it('测试解析 7', () => {
    let a = '0.125'
    let res = numberFormatter.parseNumber(a, ',', 2)
    assert.strictEqual(res, 0.13)
  })
  it('测试解析 8', () => {
    let a = '123'
    let res = numberFormatter.parseNumber(a, ',', 2)
    assert.strictEqual(res, 123)
  })
  it('测试解析 9', () => {
    let a = '123.4'
    let res = numberFormatter.parseNumber(a, ',', 2)
    assert.strictEqual(res, 123.4)
  })
})
