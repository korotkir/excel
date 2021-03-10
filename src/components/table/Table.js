import {ExcelComponents} from '@core/ExcelComponents';

export class Table extends ExcelComponents {
  static className = 'excel__table'
  toHTML() {
    return `
   <div class="row">
        <div class="row-info">
      </div>
      <div class="row-data">
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
        <div class="column">D</div>
        <div class="column">E</div>
        <div class="column">F</div>
        <div class="column">G</div>
        <div class="column">H</div>
        <div class="column">I</div>
        <div class="column">J</div>
        <div class="column">K</div>
        <div class="column">L</div>
      </div>
   </div>
   <div class="row">
    <div class="row-info">1</div>
    <div class="row-data">
        <div class="cell selected" contenteditable>A1</div>
        <div class="cell" contenteditable>B2</div>
        <div class="cell" contenteditable>C3</div>
        </div>
   </div>
   <div class="row">
    <div class="row-info">2</div>
    <div class="row-data">
        <div class="cell" contenteditable>A1</div>
        <div class="cell" contenteditable>B2</div>
        <div class="cell" contenteditable>C3</div>
   </div>
   </div>
   </div>
    `
  }
}
