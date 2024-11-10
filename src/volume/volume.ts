import { paint } from '@bake-js/-o-id/dom';
import component from './component'
import { define } from '@bake-js/-o-id';
import style from './style'
import Echo from '@bake-js/-o-id/echo'
import on from '@bake-js/-o-id/event'

@define('at-volume')
@paint(component, style)
class Volume extends Echo(HTMLElement) {
  #internals;

  constructor () {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals()
  }

  @on.click(":host *")
  click () {    
    const event = new CustomEvent("volumechanged")
    this.dispatchEvent(event)
    return this
  }
}

export default Volume;
