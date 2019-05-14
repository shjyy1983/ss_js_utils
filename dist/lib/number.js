"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 数字转换成 按照某个分隔符以3位分隔的字符串
 * @param {*} num 数字
 * @param {*} precision 小数保留位数
 * @param {*} separator 分隔符
 */
function formatNumber(num, precision, separator) {
  var parts = ''; // 判断是否为数字

  if (!isNaN(parseFloat(num)) && isFinite(num)) {
    // 把类似 .5, 5. 之类的数据转化成0.5, 5, 为数据精度处理做准, 至于为什么
    // 不在判断中直接写 if (!isNaN(num = parseFloat(num)) && isFinite(num))
    // 是因为parseFloat有一个奇怪的精度问题, 比如 parseFloat(12312312.1234567119)
    // 的值变成了 12312312.123456713
    num = Number(num); // 处理小数点位数

    num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num).toString(); // 分离数字的小数部分和整数部分

    parts = num.split('.'); // 整数部分加[separator]分隔, 借用一个著名的正则表达式

    parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));
    return parts.join('.');
  }

  return NaN;
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