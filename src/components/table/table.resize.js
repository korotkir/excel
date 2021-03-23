import {$} from '@core/dom';

export function resizeHandler($root, event) {
  const $resizer = $(event.target)
  // comm: const $parent = $resizer.$el.parentNode  // bad!
  const $parent = $resizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const type = $resizer.data.resize
  const sideProp = type === 'col' ? 'bottom' : 'right'
  let value

  $resizer.css({
    opacity: 1,
    zIndex: 1000,
    [sideProp]: '-5000px',
  })

  document.onmousemove = e => {
    console.log('mousemove')
    if (type === 'col') {
      // Получаем расстояния от исходного края до сдвига в px
      const delta = e.pageX - coords.right
      value = coords.width + delta
      $resizer.css({right: -delta + 'px'})
    } else if (type === 'row') {
      // Получаем расстояния от исходного края до сдвига в px
      const delta = e.pageY - coords.bottom
      value = coords.height + delta
      $resizer.css({bottom: -delta + 'px'})
    }
  }

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    if (type === 'col') {
      $parent.css({width: value + 'px'})
      $root.findAll(`[data-col="${$parent.data.col}"]`)
          .forEach(el => el.style.width = value + 'px')
    } else {
      $parent.css({height: value + 'px'})
    }

    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0
    })
  }
}