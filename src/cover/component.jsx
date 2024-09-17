import { html } from '@bake-js/-o-id/dom';
import background from './background.png'

function component () {
  return html`
    <img class="cover" src="${background}" />
  `
}

export default component
