// Pure functions
// Функция делает заглавной первую букву строки.
export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
