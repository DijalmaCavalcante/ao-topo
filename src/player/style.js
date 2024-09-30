import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .player__play {
      border: none;
      padding: 0;
      background: none;
      cursor: pointer;
      display: inline-block;
    }

    .player__play img {
      display: block;
      pointer-events: none;
    }
  `
}

export default style
