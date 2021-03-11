class Dom {
  constructor(selector) {
    // #app
    // если тип "selector" - строка, тогда "document.querySelector(selector)"
    // иначе "selector"
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }
  // Данный метод используется вместо innerHTML
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    // trim обрезает пробелы слева и справа
    return this.$el.outerHTML.trim()
  }

  // Данный метод очищает контент класса
  clear() {
    this.html('')
    return this
  }

  // Данный метод вешает addEventListener()
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }
}

$('div').html(`<h1>Test</h1>`).clear()

// Функция $ отвечает за взаимодействие с DOM-элементами
export function $(selector) {
  return new Dom(selector)
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
  return $(el)
}
