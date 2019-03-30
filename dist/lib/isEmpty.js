"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEmpty(str) {
  (0, _assertString.default)(str);
  return str.trim().length === 0;
}

var _default = isEmpty;
exports.default = _default;