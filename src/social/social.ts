import { paint, repaint } from '@bake-js/-o-id/dom';
import component from './component'
import { attributeChanged, define } from '@bake-js/-o-id';

@define('at-social')
@paint(component)
class Social extends HTMLElement {
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

export default Social
