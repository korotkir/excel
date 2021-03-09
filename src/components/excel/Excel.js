export class Excel {
  constructor(selector, options) {
    // В нашем случае, $el = #app
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = document.createElement('div')
    this.components.forEach(Component => {
      const component = new Component()
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    })
    return $root
  }

  render() {
    // Метод append позволяет вставить в конец какого-либо другой элемент.
    this.$el.append(this.getRoot())
  }
}


