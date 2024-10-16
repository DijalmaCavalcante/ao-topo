import { paint, repaint } from '@bake-js/-o-id/dom';
import component from './component'
import { attributeChanged, define } from '@bake-js/-o-id';
import style from './style'

@define('at-icons')
@paint(component, style)
class Icons extends HTMLElement {
  #type

  get type () {
    return (this.#type ??= '')
  }
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" })
  }

  @attributeChanged("type")
  @repaint
  changeType (value) {
    this.#type = value
  }
}

export default Icons
