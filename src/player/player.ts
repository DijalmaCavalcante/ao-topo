import { paint, didPaint } from '@bake-js/-o-id/dom';
import component from './component'
import { define } from '@bake-js/-o-id';
import style from './style'

@define('at-player')
@paint(component, style)
class Player extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: "open" });
  }

  @didPaint
  teste() {
    const teste = this.shadowRoot.querySelector("audio");
    console.log(
      teste.addEventListener("durationchange", (event) => {
        console.log("Not sure why, but the duration of the video has changed.");
      })
    )
  }
}

export default Player;

