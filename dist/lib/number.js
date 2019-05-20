"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * @Author: SHEN
 * @Date: 2019-05-14 11:19:08
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-05-14 19:46:34
 */

/**
 * 数字转换成 按照某个分隔符以3位分隔的字符串
 * @param {*} num 数字
 * @param {*} precision 小数保留位数
 * @param {*} separator 分隔符
 */
function formatNumber(num, precision, separator) {
  var parts = ''; // 判断是否为数字

  if (!isNaN(parseFloat(num)) && isFinite(num)) {
    num = Number(num); // 处理小数点位数

    num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num).toString(); // 分离数字的小数部分和整数部分

    parts = num.split('.'); // 整数部分加[separator]分隔, 借用一个著名的正则表达式

    parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));
    return parts.join('.');
  }

  return null;
}
/**
 * 解析字符串数字为数字
 * @param {*} string 字符串，如: 123,456.78
 * @param {*} separator 分隔符：如：,
 * @param {*} precision 结果数值的精度
 */


function parseNumber(string, separator) {
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
  var parts = string.split('.');
  parts[0] = parts[0].replace(new RegExp(separator || ',', 'g'), '');
  return Number(Number(parts.join('.')).toFixed(precision));
}

var _default = {
  formatNumber: formatNumber,
  parseNumber: parseNumber
};
exports.default = _default;