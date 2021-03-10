import {DomListener} from '@core/DomListener'

export class ExcelComponents extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }
  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}
