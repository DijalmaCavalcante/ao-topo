import { html } from '@bake-js/-o-id/dom';
import music from './music.mp3'

function component (self) {
  return html`
    <audio id="player__music">
      <source src="${music}" type="audio/mpeg">
    </audio> 
    <div class="player">
      <div class="player__controls">

        <button class="player__action">
          <at-icons use="back"></at-icons>
        </button>
        <button class="player__action" id="playButton" current=${self.current === "play"}>
          <at-icons use="play"></at-icons>
        </button>
        <button class="player__action" id="pauseButton" current=${self.current === "pause"}>
          <at-icons use="pause"></at-icons>
        </button>
        <button class="player__action">
          <at-icons use="forward"></at-icons>
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
