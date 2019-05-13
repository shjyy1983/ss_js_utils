"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUrl;

/*
 * @Author: SHEN
 * @Date: 2019-04-01 15:20:29
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-04-22 15:25:04
 *
 * 判断是否为 url
 */
function isUrl(string) {
  if (typeof string !== 'string') {
    return false;
  }

  var strRegex = '^((https|http|ftp|rtsp|mms)?://)' + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + // ftp的user@
  '(([0-9]{1,3}.){3}[0-9]{1,3}' + // IP形式的URL- 199.194.52.184
  '|' + // 允许IP和DOMAIN（域名）
  "([0-9a-z_!~*'()-]+.)*" + // 域名- www.
  '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' + // 二级域名
  '[a-z]{2,6})' + // first level domain- .com or .museum
  '(:[0-9]{1,4})?' + // 端口- :80
  '((/?)|' + // a slash isn't required if there is no file name
  "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
  var re = new RegExp(strRegex);

  if (re.test(string)) {
    return true;
  } else {
    return false;
  }
}