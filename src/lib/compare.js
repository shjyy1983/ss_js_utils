/*
 * @Author: SHEN
 * @Date: 2019-05-13 09:21:33
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-05-13 09:22:35
 */

/**
  * 比较函数，用于 sort
  * @param {*} a 数据
  * @param {*} b 数据
  * @param {*} asc 是否升序
  */
export default function compare(a, b, asc = true) {
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
