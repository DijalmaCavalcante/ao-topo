import { attributeChanged, define } from '@bake-js/-o-id';
import { paint, repaint } from '@bake-js/-o-id/dom';
import component from './component'
import Echo from '@bake-js/-o-id/echo'
import style from './style'

@define('at-music-duration')
@paint(component, style)
class Musicduration extends Echo(HTMLElement) {
  #value

  @attributeChanged('value')
  @repaint
  set value(value) {
    this.#value = value;
  }

  get value () {
    return this.#value ??= '0:00'
  }

  constructor () {
    super();
    this.attachShadow({ mode: "open" });
  }

}

export default Musicduration;

