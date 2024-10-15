import { html } from '@bake-js/-o-id/dom';
import music from './music.mp3'
import icon from './icon'

function component () {
  return html`
    <audio id="player__music">
      <source src="${music}" type="audio/mpeg">
    </audio> 
    <div class="player">
      <div class="player__controls">
        <button class="player__action">
          ${icon.back()}
        </button>
        <button class="player__action">
          ${icon.play()}
        </button>
        <button class="player__action">
          ${icon.forward()}
        </button>
      </div>
      <div class="player__progress">
        <div class="player__bar"></div>
        <div class="player__timer">
          <span class="player__duration">00:00</span>
          <span class="player__duration">00:00</span>
        </div>
      </div>
    </div>
  `
}

export default component
