export default function isBoolean(str) {
  return (['true', 'false', '1', '0'].indexOf(str) >= 0)
}
