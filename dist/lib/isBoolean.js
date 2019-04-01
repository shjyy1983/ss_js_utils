"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

function isBoolean(str) {
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}