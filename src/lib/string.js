/*
 * @Author: SHEN
 * @Date: 2019-08-07 09:08:06
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-10-08 20:23:42
 */

/**
 * 替换字符串中的某些位置的字符串为指定字符
 * @param {*} str 需要被替换的字符串
 * @param {*} symbol 用于替换的字符
 * @param {*} position 有：middle start end
 * @param {*} len 替换的长度
 */
function puzzleString(str, symbol = '*', n = 4, position = 'middle') {
  // 非字符串原样输出
  if (!(typeof str === 'string' || str instanceof String)) {
    return str
  }
  let len = str.length

  // 创建相同的字符数组
  let symbols = Array(Math.min(n, len) + 1).join(symbol)

  // 如果字符串长度小于 n，则直接返回字符串长度下的替换符号字符串
  if (len <= n) {
    return symbols
  }
  // position = middle
  let nleft = Math.floor((len - n) / 2)
  let nRight = (len - n) - nleft
  if (position === 'left') {
    nleft = 0
    nRight = len - n
  }
  if (position === 'right') {
    nleft = len - n
    nRight = 0
  }
  return str.substr(0, nleft) + symbols + str.substr(nleft + n, nRight)
}

// https://www.html.cn/archives/8100
// 至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符
function stringStrengthCheck(str) {
  let strRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
  var re = new RegExp(strRegex)
  if (re.test(str)) {
    return true
  } else {
    return false
  }
}

function stringStrengthCheckLeveled(str, minLen = 8, maxLen = 16) {
  let checked = []
  let len = str.length
  // 长度判断
  checked.push({
    lvl: 1,
    pass: len >= minLen && len <= maxLen,
    desc: `密码长度必须在${minLen}~${maxLen}之间`
  })
  // 至少包含一个小写字母
  checked.push({
    lvl: 2,
    pass: /[a-z]{1,}/.test(str),
    desc: `至少包含一个小写字母`
  })
  // 至少包含一个大写字母
  checked.push({
    lvl: 3,
    pass: /[A-Z]{1,}/.test(str),
    desc: `至少包含一个大写字母`
  })
  // 至少包含一个数字
  checked.push({
    lvl: 4,
    pass: /[0-9]{1,}/.test(str),
    desc: `至少包含一个数字`
  })
  // 至少包含一个特殊字符
  checked.push({
    lvl: 5,
    pass: /[。~!@#$%\\^\\+\\*&\\\\/\\?\\|:\\.<>{}()';="]{1,}/.test(str),
    desc: `至少包含一个特殊字符`
  })
  // 是否全通过
  let pass = checked.filter(e => e.pass === true).length === checked.length
  // 不通过的描述
  let unpass = checked.find(e => e.pass === false)
  // 密码强度 1~5
  let strength = checked.filter(e => e.pass === true).length
  return {
    allPass: pass,
    strength: strength,
    desc: unpass ? unpass.desc : '',
    checked: checked
  }
}

export {
  puzzleString,
  stringStrengthCheck,
  stringStrengthCheckLeveled
}
