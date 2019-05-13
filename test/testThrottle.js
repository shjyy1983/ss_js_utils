
import throttle from '../src/lib/throttle'

var assert = require('assert')

var chai = require('chai')
chai.should()

var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

/* eslint-disable no-undef, node/no-deprecated-api */
describe('测试 throttle', () => {
  it('异步', (done) => {
    let dosome = function (param) {
      console.log(param + '>>> dosome')
    }
    let fn = throttle(dosome, 500)

    fn('1') // 调用

    setTimeout(() => {
      fn('2')
    }, 300)

    setTimeout(() => {
      fn('3')
    }, 400)

    setTimeout(() => {
      fn('4')
    }, 700)

    setTimeout(() => {
      fn('5')
    }, 800)

    setTimeout(() => {
      fn('6')
    }, 1100)

    setTimeout(() => {
      fn('7')
    }, 1300)

    setTimeout(() => {
      fn('8')
    }, 1310)

    setTimeout(() => {
      done()
    }, 1900)
  })
})
