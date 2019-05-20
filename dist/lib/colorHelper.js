"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increaseBrightness = increaseBrightness;

/*
 * @Author: SHEN
 * @Date: 2019-05-14 19:49:09
 * @Last Modified by:   SHEN
 * @Last Modified time: 2019-05-14 19:49:09
 */

/**
 * 根据16进制的颜色，提高其亮度
 * @param {*} hex  如：#ff00ff
 * @param {*} percent 如：0.2
 */
function increaseBrightness(hex, percent) {
  // strip the leading # if it's there
  hex = hex.replace(/^\s*#|\s*$/g, ''); // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`

  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, '$1$1');
  }

  var r = parseInt(hex.substr(0, 2), 16);
  var g = parseInt(hex.substr(2, 2), 16);
  var b = parseInt(hex.substr(4, 2), 16);
  return '#' + (0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16).substr(1) + (0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16).substr(1) + (0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16).substr(1);
}