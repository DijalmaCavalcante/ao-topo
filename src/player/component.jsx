import { html } from '@bake-js/-o-id/dom';
import music from './music.mp3'
import icon from './icon'

function component () {
  return html`
    <!-- <audio controls>
      <source src="${music}" type="audio/mpeg">
    </audio>  -->
    <div class="player">
      <button class="player__play">
        ${icon.play()}
      </button>
    </div>
  `
}

export default component
