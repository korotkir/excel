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

  text(text) {
    if (typeof text === 'string') {
      this.$el.textContent = text
      return this
    }
    if (this.$el.tagName.toLowerCase() === 'input') {
      return this.$el.value.trim()
    }
    return this.$el.textContent.trim()
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

  // Данный метод удаляет addEventListener()
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
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

  // Метод позволяющий быстро дойти до data атрибутов
  // Getter
  get data() {
    return this.$el.dataset
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  // Метод для получения координат
  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  find(selector) {
    return $(this.$el.querySelector(selector))
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  css(styles = {}) {
    Object
        .keys(styles)
        .forEach(key => {
          this.$el.style[key] = styles[key]
        })
  }

  getStyles(styles = []) {
    return styles.reduce((res, s) => {
      res[s] = this.$el.style[s]
      return res
    }, {})
  }

  id(parse) {
    if (parse) {
      const parsed = this.id().split(':')
      return {
        row: +parsed[0],
        col: +parsed[1]
      }
    }
    return this.data.id
  }

  focus() {
    this.$el.focus()
    return this
  }

  addClass(className) {
    this.$el.classList.add(className)
  }

  removeClass(className) {
    this.$el.classList.remove(className)
  }
}

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
