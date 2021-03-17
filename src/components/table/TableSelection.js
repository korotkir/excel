export class TableSelection {
  constructor() {
    this.group = []
  }

  // $el instaceof DOM === true
  select($el) {
    this.group.push($el)
    $el.addClass('selected')
  }

  selectGroup() {

  }
}
