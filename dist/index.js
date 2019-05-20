"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colorHelper = require("./lib/colorHelper");

var _compare = require("./lib/compare");

var _deepCopy = _interopRequireDefault(require("./lib/deepCopy"));

var _isEmpty = _interopRequireDefault(require("./lib/isEmpty"));

var _isBoolean = _interopRequireDefault(require("./lib/isBoolean"));

var _isUrl = _interopRequireDefault(require("./lib/isUrl"));

var _number = _interopRequireDefault(require("./lib/number"));

var _throttle = _interopRequireDefault(require("./lib/throttle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: SHEN
 * @Date: 2019-05-14 19:51:15
 * @Last Modified by:   SHEN
 * @Last Modified time: 2019-05-14 19:51:15
 */
var validator = {
  compare: _compare.compare,
  compareBy: _compare.compareBy,
  increaseBrightness: _colorHelper.increaseBrightness,
  deepCopy: _deepCopy.default,
  isEmpty: _isEmpty.default,
  isBoolean: _isBoolean.default,
  isUrl: _isUrl.default,
  numberFormatter: _number.default,
  throttle: _throttle.default
};
var _default = validator;
exports.default = _default;