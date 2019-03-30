import assertString from './util/assertString'

function isEmpty(str) {
  assertString(str)
  return str.trim().length === 0
}

export default isEmpty
