import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    input[type="range"] {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 8px;
      background: var(--color-orange);
      border-radius: var(--radius-small);
      outline: none;
    }

    input[type="range"]::-moz-range-thumb {
      width: 15px;
      height: 15px;
      border-radius: var(--radius-full);
      background: var(--color-pure-white);
      cursor: pointer;
    }

  `
}

export default style
