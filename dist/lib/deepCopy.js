"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * @Author: SHEN
 * @Date: 2019-04-22 15:25:22
 * @Last Modified by:   SHEN
 * @Last Modified time: 2019-04-22 15:25:22
 *
 * 深拷贝对象
 */
function find(list, f) {
  return list.filter(f)[0];
}

function deepCopy(obj, cache) {
  if (cache === void 0) cache = []; // just return if obj is immutable value

  if (obj === null || _typeof(obj) !== 'object') {
    return obj;
  } // if obj is hit, it is in circular structure


  var hit = find(cache, function (c) {
    return c.original === obj;
  });

  if (hit) {
    return hit.copy;
  }

  var copy = Array.isArray(obj) ? [] : {}; // put the copy into cache at first
  // because we want to refer it in recursive deepCopy

  cache.push({
    original: obj,
    copy: copy
  });
  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });
  return copy;
}

var _default = deepCopy;
exports.default = _default;