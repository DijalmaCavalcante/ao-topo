import { html } from '@bake-js/-o-id/dom';
import background from './background.png'

const socials = ['amazon', 'apple', 'deezer', 'youtube', 'spotifyOriginal']

function component () {  
  return html`
    <div class="infomusic">
      <div class="infomusic__container">
        <img class="infomusic__image" src="${background}" />
        <div class="infomusic__details">
          <div class="infomusic__name">
            <span class="infomusic__title">Fazer valer</span>
            <span class="infomusic__bandname">Ao Topo!</span>
          </div>
          <div class="infomusic__player">
            <div class="infomusic__streams">
              ${socials.map((x) => html`
                <at-social class="infomusic__streamsIcon" type="${x}"></at-social>
              `)}
            </div>
            <at-player></at-player>
          </div>
        </div>
      </div>
    </div>
  `
}

export default component
