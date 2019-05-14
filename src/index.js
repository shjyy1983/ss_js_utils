/*
 * @Author: SHEN
 * @Date: 2019-05-14 19:51:15
 * @Last Modified by:   SHEN
 * @Last Modified time: 2019-05-14 19:51:15
 */

import { increaseBrightness } from './lib/colorHelper'
import { compare, compareBy } from './lib/compare'
import deepCopy from './lib/deepCopy'
import isEmpty from './lib/isEmpty'
import isBoolean from './lib/isBoolean'
import isUrl from './lib/isUrl'
import numberFormatter from './lib/number'
import throttle from './lib/throttle'

const validator = {
  compare,
  compareBy,
  increaseBrightness,
  deepCopy,
  isEmpty,
  isBoolean,
  isUrl,
  numberFormatter,
  throttle
}

export default validator
