import { paint } from '@bake-js/-o-id/dom';
import component from './component'
import { define } from '@bake-js/-o-id';
import style from './style'

@define('at-musicname')
@paint(component, style)
class Musicname extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: "open" })
  }
}

export default Musicname
