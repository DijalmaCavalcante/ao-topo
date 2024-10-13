import { define } from "@bake-js/-o-id";
import { paint } from "@bake-js/-o-id/dom";
import component from "./component"
import style from "./style"
import on from "@bake-js/-o-id/event"

@define('at-members')
@paint(component, style)
class Members extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: "open" })
    this.state = { current: 'bene' } // inicializa o estado com 'bene'
  }

  setState (state) {
    this.state = {...this.state,...state }
  }
}

export default Members