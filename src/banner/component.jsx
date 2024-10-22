import { html } from '@bake-js/-o-id/dom';
import background from '../assets/background.png'
import link from '../links'

function component () {
  return html`
    <section class="banner">
      <img class="banner_background" src="${background}" />
      <div class="banner__scroll">
        <at-icons use="mouse" class="banner__mouse"></at-icons>
        <span>Pra cima!</span>
      </div>
      <div class="banner_container">
        <at-logo></at-logo>
        <div class="banner_social">
          <a href=${link.instagram}>
            <at-icons class="teste" use="strokeinstagram"></at-icons>
          </a>
          <a>
            <at-icons class="teste" use="strokespotify"></at-icons>
          </a>
        </div>
      </div>
    </section>
  `

}

export default component
