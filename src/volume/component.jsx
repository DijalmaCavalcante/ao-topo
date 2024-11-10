import { html } from '@bake-js/-o-id/dom';

function component () {
  return html`
    <input type="range" min="0" max="1" step="0.01" value="1">
  `
}

export default component
