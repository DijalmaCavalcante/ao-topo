import { html } from '@bake-js/-o-id/dom';
import background from './background.png'

function component () {
  return html`
    <img class="songBackground" src="${background}" />
  `
}

export default component
