"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.puzzleString = puzzleString;
exports.stringStrengthCheck = stringStrengthCheck;

/*
 * @Author: SHEN
 * @Date: 2019-08-07 09:08:06
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-10-08 09:56:25
 */

/**
 * 替换字符串中的某些位置的字符串为指定字符
 * @param {*} str 需要被替换的字符串
 * @param {*} symbol 用于替换的字符
 * @param {*} position 有：middle start end
 * @param {*} len 替换的长度
 */
function puzzleString(str) {
  var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
  var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'middle';

  // 非字符串原样输出
  if (!(typeof str === 'string' || str instanceof String)) {
    return str;
  }

  var len = str.length; // 创建相同的字符数组

  var symbols = Array(Math.min(n, len) + 1).join(symbol); // 如果字符串长度小于 n，则直接返回字符串长度下的替换符号字符串

  if (len <= n) {
    return symbols;
  } // position = middle


  var nleft = Math.floor((len - n) / 2);
  var nRight = len - n - nleft;

  if (position === 'left') {
    nleft = 0;
    nRight = len - n;
  }

  if (position === 'right') {
    nleft = len - n;
    nRight = 0;
  }

  return str.substr(0, nleft) + symbols + str.substr(nleft + n, nRight);
} // https://www.html.cn/archives/8100
// 至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符


function stringStrengthCheck(str) {
  var strRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
  var re = new RegExp(strRegex);

  if (re.test(str)) {
    return true;
  } else {
    return false;
  }
}