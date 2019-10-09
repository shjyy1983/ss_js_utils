/*
 * @Author: SHEN
 * @Date: 2019-05-14 11:19:08
 * @Last Modified by: SHEN
 * @Last Modified time: 2019-10-09 20:23:19
 */

/**
 * 数字转换成 按照某个分隔符以3位分隔的字符串
 * @param {*} num 数字
 * @param {*} precision 小数保留位数
 * @param {*} separator 分隔符
 */
function formatNumber(num, precision, separator) {
  let parts = ''
  // 判断是否为数字
  if (!isNaN(parseFloat(num)) && isFinite(num)) {
    num = Number(num)
    // 处理小数点位数
    num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num).toString()
    // 分离数字的小数部分和整数部分
    parts = num.split('.')
    // 整数部分加[separator]分隔, 借用一个著名的正则表达式
    parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','))
    return parts.join('.')
  }
  return null
}

/**
 * 解析字符串数字为数字
 * @param {*} string 字符串，如: 123,456.78
 * @param {*} separator 分隔符：如：,
 * @param {*} precision 结果数值的精度
 */
function parseNumber(string, separator, precision = 8) {
  let parts = string.split('.')
  parts[0] = parts[0].replace(new RegExp(separator || ',', 'g'), '')
  return Number(Number(parts.join('.')).toFixed(precision))
}

function cutNum(value, integerNum) {
  var arrNum = value.split('.')
  if (arrNum.length > 0) {
    var integerNumber = arrNum[0].substr(0, integerNum)
    if (arrNum.length > 1) {
      value = integerNumber + '.' + arrNum[1]
    } else {
      value = integerNumber
    }
  }
  return value
}

// eslint-disable-next-line no-extend-native
Number.prototype.toFixedSelf = function(n) {
  if (n > 20 || n < 0) {
    throw new RangeError('toFixed() digits argument must be between 0 and 20')
  }
  const number = this
  if (isNaN(number) || number >= Math.pow(10, 21)) {
    return number.toString()
  }
  if (typeof (n) === 'undefined' || n == 0) {
    return (Math.round(number)).toString()
  }
  let result = number.toString()
  const arr = result.split('.')
  // 整数的情况
  if (arr.length < 2) {
    result += '.'
    for (let i = 0; i < n; i += 1) {
      result += '0'
    }
    return result
  }
  const integer = arr[0]
  const decimal = arr[1]
  if (decimal.length == n) {
    return result
  }
  if (decimal.length < n) {
    for (let i = 0; i < n - decimal.length; i += 1) {
      result += '0'
    }
    return result
  }
  result = integer + '.' + decimal.substr(0, n)
  const last = decimal.substr(n, 1)

  // 四舍五入，转换为整数再处理，避免浮点数精度的损失
  if (parseInt(last, 10) >= 5) {
    const x = Math.pow(10, n)
    result = (Math.round((parseFloat(result) * x)) + 1) / x
    result = result.toFixedSelf(n)
  }
  return result
}

function numtochinese(Num, suffixNumber) {
  for (var i = Num.length - 1; i >= 0; i--) {
    Num = Num.replace(',', '')// 替换tomoney()中的“,”
    Num = Num.replace(' ', '')// 替换tomoney()中的空格
  }
  Num = Num.replace('￥', '')// 替换掉可能出现的￥字符
  if (isNaN(Num)) {
    // 验证输入的字符是否为数字
    // alert("请检查小写金额是否正确");
    return
  }
  // ---字符处理完毕，开始转换，转换采用前后两部分分别转换---//
  var part = String(Num).split('.')
  var newchar = ''
  // 小数点前进行转化
  for (i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 17) {
    //   alert("");
      return '位数过大，无法计算'
    }// 若数量超过拾亿单位，提示
    var tmpnewchar = ''
    var perchar = part[0].charAt(i)
    switch (perchar) {
    case '0':
      tmpnewchar = '零' + tmpnewchar
      break
    case '1':
      tmpnewchar = '壹' + tmpnewchar
      break
    case '2':
      tmpnewchar = '贰' + tmpnewchar
      break
    case '3':
      tmpnewchar = '叁' + tmpnewchar
      break
    case '4':
      tmpnewchar = '肆' + tmpnewchar
      break
    case '5':
      tmpnewchar = '伍' + tmpnewchar
      break
    case '6':
      tmpnewchar = '陆' + tmpnewchar
      break
    case '7':
      tmpnewchar = '柒' + tmpnewchar
      break
    case '8':
      tmpnewchar = '捌' + tmpnewchar
      break
    case '9':
      tmpnewchar = '玖' + tmpnewchar
      break
    }
    switch (part[0].length - i - 1) {
    case 0:
      tmpnewchar = tmpnewchar + '元'
      break
    case 1:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '拾' }
      break
    case 2:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '佰' }
      break
    case 3:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '仟' }
      break
    case 4:
      tmpnewchar = tmpnewchar + '万'
      break
    case 5:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '拾' }
      break
    case 6:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '佰' }
      break
    case 7:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '仟' }
      break
    case 8:
      tmpnewchar = tmpnewchar + '亿'
      break
    case 9:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '拾' }
      break
    case 10:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '百' }
      break
    case 11:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '仟' }
      break
    case 12:
      tmpnewchar = tmpnewchar + '兆'
      break
    case 13:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '拾' }
      break
    case 14:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '百' }
      break
    case 15:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '仟' }
      break
    case 16:
      if (perchar != 0) { tmpnewchar = tmpnewchar + '京' }
      break
    case 17:
      tmpnewchar = tmpnewchar + '拾'
      break
    }
    newchar = tmpnewchar + newchar
  }
  // 小数点之后进行转化
  if (Num.indexOf('.') != -1) {
    if (part[1].length > 2) {
      // alert("小数点之后只能保留两位,系统将自动截段");
      var tempNum = parseFloat(Num)
      Num = tempNum.toFixedSelf(suffixNumber)
      part = String(Num).split('.')
    }
    for (i = 0; i < part[1].length; i++) {
      tmpnewchar = ''
      perchar = part[1].charAt(i)
      switch (perchar) {
      case '0':
        tmpnewchar = '零' + tmpnewchar
        break
      case '1':
        tmpnewchar = '壹' + tmpnewchar
        break
      case '2':
        tmpnewchar = '贰' + tmpnewchar
        break
      case '3':
        tmpnewchar = '叁' + tmpnewchar
        break
      case '4':
        tmpnewchar = '肆' + tmpnewchar
        break
      case '5':
        tmpnewchar = '伍' + tmpnewchar
        break
      case '6':
        tmpnewchar = '陆' + tmpnewchar
        break
      case '7':
        tmpnewchar = '柒' + tmpnewchar
        break
      case '8':
        tmpnewchar = '捌' + tmpnewchar
        break
      case '9':
        tmpnewchar = '玖' + tmpnewchar
        break
      }
      if (i == 0) { tmpnewchar = tmpnewchar + '角' }
      if (i == 1) { tmpnewchar = tmpnewchar + '分' }
      newchar = newchar + tmpnewchar
    }
  }
  // 替换所有无用汉字
  while (newchar.search('零零') != -1) { newchar = newchar.replace('零零', '零') }
  newchar = newchar.replace('零亿', '亿')
  newchar = newchar.replace('亿万', '亿')
  newchar = newchar.replace('零万', '万')
  newchar = newchar.replace('零元', '元')
  newchar = newchar.replace('零角', '')
  newchar = newchar.replace('零分', '')

  newchar = newchar.replace('亿万', '亿')
  newchar = newchar.replace('兆亿', '兆')
  newchar = newchar.replace('零兆', '兆')
  newchar = newchar.replace('京兆', '京')

  if (newchar.charAt(newchar.length - 1) == '元' ||
      newchar.charAt(newchar.length - 1) == '角') { newchar = newchar + '整' }

  var digit = ['壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  var _i = 0
  while (newchar.length > 0) {
    if (digit.indexOf(newchar[0]) < 0) {
      newchar = newchar.substr(1)
    } else {
      break
    }
  }

  var firstChar = Num.substring(0, 1)
  if (firstChar == '-') {
    newchar = '负' + newchar
  }

  var lastChar = newchar.charAt(newchar.length - 1)
  if (lastChar == '零') {
    newchar = newchar.substring(0, newchar.length - 1)
    newchar = newchar + '整'
  }

  if (parseFloat(Num) == 0) {
    newchar = '零元整'
  }
  return newchar
}

function num2ChineseUnit(value, integerNum, suffixNum, isround) {
  value = String(value).replace(/[^0-9\.-]/g, '')
  value = cutNum(value, integerNum)
  if (value.split('.')[1] && value.split('.')[1].length > 2) {
    if (isround && isround === true) {
      value = parseFloat(value).toFixedSelf(suffixNum)
    } else {
      var suf = value.split('.')[1].substr(0, suffixNum)
      value = value.split('.')[0] + '.' + suf
    }
  }
  return numtochinese(value + '', suffixNum)
}

export default {
  formatNumber,
  parseNumber,
  num2ChineseUnit
}
