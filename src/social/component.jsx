import { html } from '@bake-js/-o-id/dom';
import instagramImage from './instagramBranco.png'
import spotifyImage from './spotifyBranco.png'

function component (self) {
  const instagram = html`
    <a class="social" href="https://www.instagram.com/oficialaotopo/" target="_blank">
      <img class="social_image" src="${instagramImage}" />
    </a>
  `

  const spotify = html`
    <a class="social href="https://www.instagram.com/oficialaotopo/" target="_blank">
      <img class="social_image" src="${spotifyImage}" />
    </a>
  `

  switch (self.type) {
    case "instagram": 
      return instagram

    case "spotify":
      return spotify

    default:
      return ""
  }
}

export default component