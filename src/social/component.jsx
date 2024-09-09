import { html } from '@bake-js/-o-id/dom';
import instagramImage from './instagram.svg'
import spotifyImage from './spotify.svg'

function component (self) {
  const instagram = html`
    <a class="banner_midia" href="https://www.instagram.com/oficialaotopo/" target="_blank">
      <img src="${instagramImage}" />
    </a>
  `

  const spotify = html`
    <a class="banner_midia" href="https://www.instagram.com/oficialaotopo/" target="_blank">
      <img src="${spotifyImage}" />
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
