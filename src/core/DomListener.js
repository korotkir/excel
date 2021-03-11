import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  // Данная функция вешает событие на listener.
  // Если элемент listener не определен - отдает ошибку.
  initDOMListeners() {
    // console.log(this.listeners, this.$root)
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if (!this[method]) {
        const name = this.name || ''
        throw new Error(
            // Метод $ {method} не реализован в компоненте ${name}
            `Method ${method} is not implemented in ${name} Component`)
      }
      // Тоже самое что и addEventListener
      this.$root.on(listener, this[method].bind(this))
    })
  }

  removeDOMListeners() {
    // TODO: REALIZE!
  }
}

// Пишем приватную функцию специально для этого модуля.
// Добавляет 'on' к элементу массива.
// input => onInput
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}


