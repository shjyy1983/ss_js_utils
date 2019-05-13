"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * @Author: SHEN
 * @Date: 2019-04-22 15:25:58
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-04-22 15:32:24
 *
 * 延迟调用
 */
var throttle = function throttle(fn, delay) {};

var _default = throttle; // var throttle = function(fn, delay) {
//   var now, lastExec, timer, context, args; //eslint-disable-line
//   var execute = function() {
//     fn.apply(context, args)
//     lastExec = now
//   }
//   return function() {
//     context = this
//     args = arguments
//     now = Date.now()
//     if (timer) {
//       clearTimeout(timer)
//       timer = null
//     }
//     if (lastExec) {
//       var diff = delay - (now - lastExec)
//       if (diff < 0) {
//         execute()
//       } else {
//         timer = setTimeout(() => {
//           execute()
//         }, diff)
//       }
//     } else {
//       execute()
//     }
//   }
// }

exports.default = _default;