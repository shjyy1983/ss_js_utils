"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty = _interopRequireDefault(require("./lib/isEmpty"));

var _isBoolean = _interopRequireDefault(require("./lib/isBoolean"));

var _deepCopy = _interopRequireDefault(require("./lib/deepCopy"));

var _isUrl = _interopRequireDefault(require("./lib/isUrl"));

var _compare = require("./lib/compare");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validator = {
  isEmpty: _isEmpty.default,
  isBoolean: _isBoolean.default,
  deepCopy: _deepCopy.default,
  isUrl: _isUrl.default,
  compare: _compare.compare,
  compareBy: _compare.compareBy
};
var _default = validator;
exports.default = _default;