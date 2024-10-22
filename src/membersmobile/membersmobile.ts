import { define } from "@bake-js/-o-id";
import { paint, repaint } from "@bake-js/-o-id/dom";
import component from "./component";
import style from "./style";
import on from "@bake-js/-o-id/event";
import characters from './characters';

@define('at-members-mobile')
@paint(component, style)
class Membersmobile extends HTMLElement {

  get characters () {
    return characters[0];
  }

  constructor () {
    super()
    this.attachShadow({ mode: "open" })
  }

  @repaint
  @on.click("#prev")
  onPrev() {
    characters.unshift(characters.pop() as any);
  }

  @repaint
  @on.click("#next")
  onNext() {
    characters.push(characters.shift() as any);
  }
}

export default Membersmobile
