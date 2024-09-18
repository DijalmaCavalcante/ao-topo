import { html } from '@bake-js/-o-id/dom';
import background from './background.png'

function component () {
  return html`
    <div class="infomusic">
      <img class="infomusic__image" src="${background}" />
      <div class="infomusic__musicname">
        <span class="infomusic__title">Fazer valer</span>
        <span class="infomusic__bandname">Ao Topo!</span>
      </div>
    </div>
  `
}

export default component
