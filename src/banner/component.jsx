import { html } from '@bake-js/-o-id/dom';
import background from '../../assets/videos/ribeirao-pires-2024.mp4'
import instagram from '../../assets/social/instagram.svg'
import spotify from '../../assets/social/spotify.svg'
import logo from '../../assets/logo.png'

function component () {
  return html`
    <section class="banner">
      <video class="banner_video" autoplay loop muted playsinline>
        <source src="${background}" type="video/mp4">
        Seu navegador não suporta a exibição deste vídeo.
      </video>
      <div class="banner_container">
        <img class="banner_logo" src="${logo}" />
        <div class="banner_social">
          <a class="banner_midia" href="https://www.instagram.com/oficialaotopo/" target="_blank">
            <img src="${instagram}" />
          </a>
          <a class="banner_midia" href="https://www.instagram.com/oficialaotopo/" target="_blank">
            <img src="${spotify}" />
          </a>
        </div>
      </div>
  </section>
  `

}

export default component
