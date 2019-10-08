"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * @Author: SHEN
 * @Date: 2019-05-28 11:33:50
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-05-28 13:15:09
 */
// https://github.com/springlong/easydate.js/blob/master/src/easydate.js
function getDoubleNum(num) {
  return num < 10 ? '0' + num : num;
}

var easyDate = {
  parse: function parse(value) {
    var date = null;

    if (typeof value === 'string') {
      date = new Date(value);
    } else if (typeof value === 'number') {
      date = new Date(value);
    } else {
      date = new Date();
    }

    return date;
  },
  format: function format(date, formatStr) {
    var oDate = date;
    var fullYear = oDate.getFullYear();
    var year = (fullYear + '').substring(2);
    var month = oDate.getMonth() + 1;
    var day = oDate.getDate();
    var hours24 = oDate.getHours();
    var hours12 = hours24 > 12 ? hours24 - 12 : hours24;
    var minutes = oDate.getMinutes();
    var seconds = oDate.getSeconds();
    var partObj = {
      'yyyy': fullYear,
      'yy': year,
      'MM': getDoubleNum(month),
      'M': month,
      'dd': getDoubleNum(day),
      'd': day,
      'HH': getDoubleNum(hours24),
      'H': hours24,
      'hh': getDoubleNum(hours12),
      'h': hours12,
      'mm': getDoubleNum(minutes),
      'm': minutes,
      'ss': getDoubleNum(seconds),
      's': seconds,
      'S': oDate.getMilliseconds(),
      'tt': hours24 > 12 ? '下午' : '上午' // 默认格式

    };
    if (typeof formatStr !== 'string' || formatStr === '') formatStr = 'yyyy/MM/dd HH:mm:ss'; // 循环遍历替换

    for (var name in partObj) {
      if (partObj.hasOwnProperty(name)) {
        formatStr = formatStr.replace(new RegExp(name, 'g'), partObj[name]);
      }
    } // 返回格式化后的结果


    return formatStr;
  }
};
var _default = easyDate;
exports.default = _default;