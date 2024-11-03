import { paint, repaint } from '@bake-js/-o-id/dom';
import component from './component'
import { define } from '@bake-js/-o-id';
import style from './style'
import on from "@bake-js/-o-id/event"

@define('at-player')
@paint(component, style)
class Player extends HTMLElement {
  #playing;

  get playing () {
    return (this.#playing ??= false);
  }

  constructor () {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("#playButton")
  @repaint
  play () {
    console.log("play");
    this.#playing = true
    
  }

  @on.click("#pauseButton")
  @repaint
  pause () {
    console.log("pause");
    this.#playing = false
    
  }

  @on.click("#backButton")
  back () {
    console.log("back");
    
  }

  @on.click("#forwardButton")
  forward () {
    console.log("forward");
    
  }
}

export default Player;

