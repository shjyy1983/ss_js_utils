/*
 * @Author: SHEN
 * @Date: 2019-04-22 15:20:49
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-05-13 09:21:50
 *
 * 判断是否为 boolean
 */

export default function isBoolean(str) {
  return (['true', 'false', '1', '0'].indexOf(str) >= 0)
}
