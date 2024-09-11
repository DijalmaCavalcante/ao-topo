import { html } from '@bake-js/-o-id/dom';
import background from './videoBack.mp4'

function component () {
  return html`
    <section class="banner">
      <video class="banner_video" autoplay loop muted playsinline>
        <source src="${background}" type="video/mp4">
        Seu navegador não suporta a exibição deste vídeo.
      </video>
      <div class="banner_container">
        <at-logo></at-logo>
        <div class="banner_social">
          <at-social type="instagram"></at-social>
          <at-social type="spotify"></at-social>
        </div>
      </div>
    </section>
  `

}

export default component
