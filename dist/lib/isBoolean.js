"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

/*
 * @Author: SHEN
 * @Date: 2019-04-22 15:20:49
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-04-22 15:21:16
 *
 * 判断是否为 boolean
 */
function isBoolean(str) {
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}