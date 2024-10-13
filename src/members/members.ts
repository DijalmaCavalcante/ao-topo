import { define } from "@bake-js/-o-id";
import { paint } from "@bake-js/-o-id/dom";
import component from "./component"
import style from "./style"
import on from "@bake-js/-o-id/dom"


@define('at-members')
@paint(component, style)
class Members extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: "open" })
  }

  @on.click("button")
  show (element) {
    const elements = this.shadowRoot.querySelectorAll('.members_group')

    elements.forEach(el => {
      el.classList.remove('active')
    })

    this.shadowRoot.getElementById(element).classList.add('active')
  }

}

export default Members
