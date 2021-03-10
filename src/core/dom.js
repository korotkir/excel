class Dom {
}


// Функция $ отвечает за взаимодействие с DOM-элементами
export function $() {
  return new Dom()
}

/* С помощью данной функции мы упростим взаимодействие с созданием классов.
Вместо этого:
  const $el = document.createElement('div')
  $el.classList.add(Component.className)
Получаем это:
  const $el = $.create('div', Component.className) */

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return el
}
