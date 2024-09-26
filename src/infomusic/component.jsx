import { html } from '@bake-js/-o-id/dom';
import background from './background.png'

function component () {
  return html`
    <div class="infomusic">
      <div class="infomusic__container">
        <img class="infomusic__image" src="${background}" />
        <div class="infomusic__informations">
          <div class="infomusic__musicname">
            <span class="infomusic__title">Fazer valer</span>
            <span class="infomusic__bandname">Ao Topo!</span>
          </div>
          <at-player></at-player>
        </div>
      </div>
    </div>
  `
}

export default component
