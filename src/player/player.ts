import { paint, repaint } from '@bake-js/-o-id/dom';
import component from './component'
import { define } from '@bake-js/-o-id';
import style from './style'
import on from "@bake-js/-o-id/event"

@define('at-player')
@paint(component, style)
class Player extends HTMLElement {
  #current

  get current () {
    return (this.#current ??= "play")
  }

  constructor () {
    super();
    this.attachShadow({ mode: "open" });
  }

  @repaint
  change (state) {     
    this.#current = state

    return this
  }

  @on.click('#playButton')
  play() {
    this.change('play')
  }

  @on.click('#pauseButton')
  pause() {
    this.change('pause')
  }

}

export default Player;

