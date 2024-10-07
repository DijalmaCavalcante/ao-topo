import { html } from '@bake-js/-o-id/dom';
import background from './background.png'

const socials = ['amazon', 'apple', 'deezer', 'youtube', 'spotifyOriginal']

function component () {  
  return html`
    <div class="infomusic">
      <div class="infomusic__container">
        <div class="infomusic__details">
          <img class="infomusic__image" src="${background}" />
          <div class="infomusic__teste">
            <div class="infomusic__name">
              <span class="infomusic__title">Fazer valer</span>
              <span class="infomusic__bandname">Ao Topo</span>
            </div>
            <at-player class="infomusic__player"></at-player>
          </div>
        </div>
      </div>
    </div>
  `
}

export default component
