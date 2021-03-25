import {$} from '@core/dom'
import {Emitter} from '@core/Emitter'

export class Excel {
  constructor(selector, options) {
    // В нашем случае, $el = #app
    this.$el = $(selector)
    this.components = options.components || []
    this.emitter = new Emitter()
  }

  getRoot() {
    const $root = $.create('div', 'excel')

    const componentOptions = {
      emitter: this.emitter
    }

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el, componentOptions)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root
  }

  render() {
    // Метод append позволяет вставить в конец какого-либо другой элемент.
    this.$el.append(this.getRoot())
    // Вызывает каждому элементу массива component (index.js)
    // метод init()(initDOMListeners()).
    // Соответственно, вешает слушатели на те компоненты,
    // в которых присутствует listeners.
    this.components.forEach(component => component.init())
  }

  destroy() {
    this.components.forEach(component => component.destroy())
  }
}


