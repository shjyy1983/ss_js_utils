/**
 * 这里使用了 2 种方式引入方法，第二种为按需引入
 */
import jsUtils from '../dist/ss_js_utils.min'
import isBoolean from '../dist/lib/isBoolean'

var assert = require('assert')

var chai = require('chai')
chai.should()

var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

/* eslint-disable no-undef, node/no-deprecated-api */
describe('测试 isEmpty', () => {
  it('空', () => {
    assert.equal(jsUtils.isEmpty(''), true)
  })
  it('带有空格', () => {
    assert.equal(jsUtils.isEmpty(' '), true)
  })
  it('非空测试', () => {
    assert.equal(jsUtils.isEmpty('a'), false)
  })
})

describe('测试 isBoolean', () => {
  it('1', () => {
    assert.equal(isBoolean('1'), true)
  })
  it('0', () => {
    assert.equal(isBoolean('0'), true)
  })
  it('true', () => {
    assert.equal(jsUtils.isBoolean('true'), true)
  })
  it('false', () => {
    assert.equal(jsUtils.isBoolean('false'), true)
  })
  it('abc 不是', () => {
    assert.equal(jsUtils.isBoolean('abc'), false)
  })
})

describe('测试 deepCopy', () => {
  it('深拷贝', () => {
    let obj = { a: 'a', b: 2, c: { d: 'd' } }
    let obj2 = jsUtils.deepCopy(obj)
    obj.a = 'aa'
    obj.b = 22
    obj.c.d = 'dd'
    assert.equal(obj2.a, 'a')
  })
})
