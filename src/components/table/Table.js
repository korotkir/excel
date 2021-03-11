import {ExcelComponents} from '@core/ExcelComponents';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponents {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    })
  }

  toHTML() {
    return createTable(20)
  }
}
