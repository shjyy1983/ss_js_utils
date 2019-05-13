import isEmpty from './lib/isEmpty'
import isBoolean from './lib/isBoolean'
import deepCopy from './lib/deepCopy'
import isUrl from './lib/isUrl'
import { compare, compareBy } from './lib/compare'

const validator = {
  isEmpty,
  isBoolean,
  deepCopy,
  isUrl,
  compare,
  compareBy
}

export default validator
