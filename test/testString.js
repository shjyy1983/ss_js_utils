import * as stringFormatter from '../src/lib/string'

var assert = require('assert')
var chai = require('chai')
chai.should()
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

/* eslint-disable no-undef, node/no-deprecated-api, camelcase */
describe('string字符串替换', () => {
  it('middle 0', () => {
    let str = '12'
    let res = stringFormatter.puzzleString(str, '*', 4, 'middle')
    assert.strictEqual(res, '**')
  })
  it('middle 1', () => {
    let str = '1234'
    let res = stringFormatter.puzzleString(str, '*', 4, 'middle')
    assert.strictEqual(res, '****')
  })
  it('middle 2', () => {
    let str = '12345'
    let res = stringFormatter.puzzleString(str, '*', 4, 'middle')
    assert.strictEqual(res, '****5')
  })
  it('middle 3', () => {
    let str = '12345678'
    let res = stringFormatter.puzzleString(str, '*', 4, 'middle')
    assert.strictEqual(res, '12****78')
  })

  it('left 1', () => {
    let str = '1234'
    let res = stringFormatter.puzzleString(str, '*', 4, 'left')
    assert.strictEqual(res, '****')
  })
  it('left 2', () => {
    let str = '12345'
    let res = stringFormatter.puzzleString(str, '*', 4, 'left')
    assert.strictEqual(res, '****5')
  })
  it('left 3', () => {
    let str = '12345678'
    let res = stringFormatter.puzzleString(str, '*', 4, 'left')
    assert.strictEqual(res, '****5678')
  })

  it('right 1', () => {
    let str = '1234'
    let res = stringFormatter.puzzleString(str, '*', 4, 'right')
    assert.strictEqual(res, '****')
  })
  it('right 2', () => {
    let str = '12345'
    let res = stringFormatter.puzzleString(str, '*', 4, 'right')
    assert.strictEqual(res, '1****')
  })
  it('right 3', () => {
    let str = '12345678'
    let res = stringFormatter.puzzleString(str, '*', 4, 'right')
    assert.strictEqual(res, '1234****')
  })

  it('其他symbol 1', () => {
    let str = '12345678'
    let res = stringFormatter.puzzleString(str, '$', 4, 'middle')
    assert.strictEqual(res, '12$$$$78')
  })
  it('其他symbol 2', () => {
    let str = '12345678'
    let res = stringFormatter.puzzleString(str, '$', 4, 'right')
    assert.strictEqual(res, '1234$$$$')
  })
  it('其他symbol 3', () => {
    let str = '12345678'
    let res = stringFormatter.puzzleString(str, '-', 4, 'left')
    assert.strictEqual(res, '----5678')
  })
})

describe('string字符串强度检测', () => {
  // 至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符
  it('test1', () => {
    let str = '1234'
    let res = stringFormatter.stringStrengthCheck(str)
    assert.strictEqual(res, false)
  })
  it('test2', () => {
    let str = '12345678'
    let res = stringFormatter.stringStrengthCheck(str)
    assert.strictEqual(res, false)
  })
  it('test3', () => {
    let str = 'a123456b3s'
    let res = stringFormatter.stringStrengthCheck(str)
    assert.strictEqual(res, false)
  })
  it('test4', () => {
    let str = 'ass1562j'
    let res = stringFormatter.stringStrengthCheck(str)
    assert.strictEqual(res, false)
  })
  it('test5', () => {
    let str = 'asSd21562j'
    let res = stringFormatter.stringStrengthCheck(str)
    assert.strictEqual(res, true)
  })
})

describe('string字符串强度检测2', () => {
  // 至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符
  it('test1', () => {
    let str = '123a62&A229'
    let res = stringFormatter.stringStrengthCheckLeveled(str)
    assert.strictEqual(res.allPass, true)
    assert.strictEqual(res.strength, 5)
  })
  it('test2', () => {
    let str = '123a62A229'
    let res = stringFormatter.stringStrengthCheckLeveled(str)
    assert.strictEqual(res.desc, '至少包含一个特殊字符')
  })
  it('test3', () => {
    let str = '123a62r229'
    let res = stringFormatter.stringStrengthCheckLeveled(str)
    assert.strictEqual(res.desc, '至少包含一个大写字母')
  })
  it('test4', () => {
    let str = 'abcAdf@#dodi'
    let res = stringFormatter.stringStrengthCheckLeveled(str)
    assert.strictEqual(res.desc, '至少包含一个数字')
  })
  it('test5', () => {
    let str = 'AADD@#233ASJJK'
    let res = stringFormatter.stringStrengthCheckLeveled(str)
    assert.strictEqual(res.desc, '至少包含一个小写字母')
  })
  it('test6', () => {
    let str = 'AH@gs12'
    let res = stringFormatter.stringStrengthCheckLeveled(str)
    assert.strictEqual(res.desc, '密码长度必须在8~16之间')
  })
  it('test7', () => {
    let str = '123'
    let res = stringFormatter.stringStrengthCheckLeveled(str)
    assert.strictEqual(res.strength, 1)
  })
  it('test8', () => {
    let str = '12345678'
    let res = stringFormatter.stringStrengthCheckLeveled(str)
    assert.strictEqual(res.strength, 2)
  })
  it('test9', () => {
    let str = '12345A678'
    let res = stringFormatter.stringStrengthCheckLeveled(str)
    assert.strictEqual(res.strength, 3)
  })
  it('test10', () => {
    let str = '12a345A678'
    let res = stringFormatter.stringStrengthCheckLeveled(str)
    assert.strictEqual(res.strength, 4)
  })
})

describe('string去除emoji', () => {
  it('test1', () => {
    let str = 'hello😢123🚗😊world🚗🚄'
    let res = stringFormatter.removeEmoji(str)
    assert.strictEqual(res, 'hello123world')
  })
})
