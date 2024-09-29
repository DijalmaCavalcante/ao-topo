import { html } from '@bake-js/-o-id/dom';
import amazonIcon from './assets/amazon.png'
import appleIcon from './assets/apple.png'
import deezerIcon from './assets/deezer.png'
import instagramImage from './assets/instagramBranco.png'
import spotifyOriginal from './assets/spotify.png'
import spotifyImage from './assets/spotifyBranco.png'
import youtubeIcon from './assets/youtube.png'

function component (self) {
  const instagram = html`
    <a class="social" href="https://www.instagram.com/oficialaotopo/" target="_blank">
      <img class="social_image" src="${instagramImage}" />
    </a>
  `

  const spotify = html`
    <a class="social" href="https://www.instagram.com/oficialaotopo/" target="_blank">
      <img class="social_image" src="${spotifyImage}" />
    </a>
  `

  const amazon = html`
    <a class="social" href="https://www.instagram.com/oficialaotopo/" target="_blank">
      <img class="social_image" src="${amazonIcon}" />
    </a>
  `

  const apple = html`
    <a class="social" href="https://www.instagram.com/oficialaotopo/" target="_blank">
      <img class="social_image" src="${appleIcon}" />
    </a>
  `

  const deezer = html`
    <a class="social" href="https://www.instagram.com/oficialaotopo/" target="_blank">
      <img class="social_image" src="${deezerIcon}" />
    </a>
  `

  const spotifyO = html`
    <a class="social" href="https://www.instagram.com/oficialaotopo/" target="_blank">
      <img class="social_image" src="${spotifyOriginal}" />
    </a>
  `

  const youtube = html`
    <a class="social" href="https://www.instagram.com/oficialaotopo/" target="_blank">
      <img class="social_image" src="${youtubeIcon}" />
    </a>
  `

  switch (self.type) {
    case "instagram": 
      return instagram

    case "spotify":
      return spotify

    case "apple":
      return apple

    case "amazon":
      return amazon

    case "deezer":
      return deezer

    case "spotifyOriginal":
      return spotifyO

    case "youtube":
      return youtube

    default:
      return ""
  }
}

export default component
