import { paint, repaint } from '@bake-js/-o-id/dom';
import component from './component'
import { attributeChanged, define } from '@bake-js/-o-id';
import style from './style'
import Echo from '@bake-js/-o-id/echo'

@define('at-progress')
@paint(component, style)
class Progress extends Echo(HTMLElement) {
  #value

  @attributeChanged('value')
  @repaint
  set value (value) {
    this.#value = value
  }

  get value () {
    return this.#value ??= 0
  }

  constructor () {
    super();
    this.attachShadow({ mode: "open" });
  }

}

export default Progress;

