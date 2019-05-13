"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * @Author: SHEN
 * @Date: 2019-04-22 15:21:30
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-04-22 15:23:52
 *
 * 判断是否为空值，空值满足以下条件：
 * 1. 必须为字符串，否则返回 false
 * 2. 字符串截取空格后的长度为 0
 */
function isEmpty(str) {
  if (typeof str !== 'string') {
    return false;
  }

  return str.trim().length === 0;
}

var _default = isEmpty;
exports.default = _default;