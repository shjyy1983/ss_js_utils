import compare from '../src/lib/compare'

var assert = require('assert')
var chai = require('chai')
chai.should()
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

/* eslint-disable no-undef, node/no-deprecated-api */
describe('compare 测试, 普通数组排序', () => {
  it('按照值升序排序', () => {
    let list = [1, 3, 2, 5, 4]
    list.sort((a, b) => compare(a, b, true))
    assert.deepEqual(list, [1, 2, 3, 4, 5])
  })

  it('按照值降序排序', () => {
    let list = [1, 3, 2, 5, 4]
    list.sort((a, b) => compare(a, b, false))
    assert.deepEqual(list, [5, 4, 3, 2, 1])
  })

  it('按照字符串名升序排序', () => {
    let list = ['a', 'c', 'd', 'e', 'b']
    list.sort((a, b) => compare(a, b, true))
    assert.deepEqual(list, ['a', 'b', 'c', 'd', 'e'])
  })
})

describe('compare 测试, 对象排序', () => {
  class Cat {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
  }
  let c1 = new Cat('c1', 1)
  let c2 = new Cat('c2', 2)
  let c3 = new Cat('c3', 3)
  let c4 = new Cat('c4', 4)
  let c5 = new Cat('c5', 5)

  it('按照名字升序排序', () => {
    let cats = [c3, c4, c2, c1, c5]
    cats.sort((c1, c2) => compare(c1.name, c2.name, true))
    assert.deepEqual(cats, [c1, c2, c3, c4, c5])
  })

  it('按照名字降序排序', () => {
    let cats = [c3, c4, c2, c1, c5]
    cats.sort((c1, c2) => compare(c1.name, c2.name, false))
    assert.deepEqual(cats, [c5, c4, c3, c2, c1])
  })

  it('按照Age降序排序', () => {
    let cats = [c3, c4, c2, c1, c5]
    cats.sort((c1, c2) => compare(c1.age, c2.age, false))
    assert.deepEqual(cats, [c5, c4, c3, c2, c1])
  })
})
