"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * @Author: SHEN
 * @Date: 2019-04-22 15:25:58
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-04-22 17:32:39
 *
 * 函数节流
 * 我触发一个时间时，先setTimout让这个事件延迟一会再执行，如果在这个时间间隔内又触发了事件，那我们就clear掉原来的定时器，再setTimeout一个新的定时器延迟一会执行
 */
var throttle = function throttle(fn, delay) {
  var context, args, lastTime, nowTime, timer;

  var execute = function execute() {
    fn.apply(context, args);
    lastTime = nowTime;
  };

  var reFn = function reFn() {
    context = this;
    args = arguments;
    nowTime = new Date().getTime();

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (lastTime) {
      var diff = delay - (nowTime - lastTime);

      if (diff < 0) {
        execute();
      } else {
        timer = setTimeout(function () {
          execute();
        }, diff);
      }
    } else {
      execute();
    }
  };

  return reFn;
};

var _default = throttle;
exports.default = _default;