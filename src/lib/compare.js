/*
 * @Author: SHEN
 * @Date: 2019-05-13 09:21:33
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-05-13 10:21:16
 */

/**
  * 比较函数，用于 sort
  * @param {*} a 数据
  * @param {*} b 数据
  * @param {*} asc 是否升序
  */
function compare(a, b, asc = true) {
  let typeA = typeof (a)
  let typeB = typeof (b)
  /* 如果两个参数均为字符串类型 */
  if (typeA === 'string' && typeB === 'string') {
    return asc ? (a.localeCompare(b)) : (b.localeCompare(a))
  }

  /* 如果两个参数均为数字 */
  if (typeA === 'number' && typeB === 'number') {
    return asc ? (a - b) : (b - a)
  }
  // 其他情况不进行排序
  return 0
}

/**
 * https://github.com/Teun/thenBy.js
 */
var compareBy = (function() {
  function identity(v) { return v }

  function ignoreCase(v) { return typeof (v) === 'string' ? v.toLowerCase() : v }

  function makeCompareFunction(f, opt) {
    opt = typeof (opt) === 'number' ? { direction: opt } : opt || {}
    if (typeof (f) !== 'function') {
      var prop = f
      // make unary function
      f = function(v1) { return v1[prop] ? v1[prop] : '' }
    }
    if (f.length === 1) {
      // f is a unary function mapping a single item to its sort score
      var uf = f
      var preprocess = opt.ignoreCase ? ignoreCase : identity
      var cmp = opt.cmp || function(v1, v2) { return v1 < v2 ? -1 : v1 > v2 ? 1 : 0 }
      f = function(v1, v2) { return cmp(preprocess(uf(v1)), preprocess(uf(v2))) }
    }
    if (opt.direction === -1) return function(v1, v2) { return -f(v1, v2) }
    return f
  }

  /* adds a secondary compare function to the target function (`this` context)
     which is applied in case the first one returns 0 (equal)
     returns a new compare function, which has a `thenBy` method as well */
  function tb(func, opt) {
    /* should get value false for the first call. This can be done by calling the
      exported function, or the firstBy(compareBy) property on it (for es6 module compatibility)
      */
    var x = (typeof (this) === 'function' && !this.compareBy) ? this : false
    var y = makeCompareFunction(func, opt)
    var f = x ? function(a, b) {
      return x(a, b) || y(a, b)
    } : y
    f.thenBy = tb
    return f
  }
  tb.compareBy = tb
  return tb
})()

export {
  compare,
  compareBy
}
