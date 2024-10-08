import { html } from '@bake-js/-o-id/dom';
import background from './background.png'

function component () {
  return html`
    <section class="banner">
      <img class="banner_background" src="${background}" />
      <div class="banner_container">
        <at-logo></at-logo>
        <div class="banner_social">
          <at-social class="banner_icon" type="instagram"></at-social>
          <at-social class="banner_icon" type="spotify"></at-social>
        </div>
      </div>
    </section>
  `

}

export default component
