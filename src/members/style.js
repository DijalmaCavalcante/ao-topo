import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .desktop {
      display: none;
    }

    .mobile {
      display: none;
    }

    .desktop[desktop = 'true'] {
      display: block;
    }

    .mobile[mobile = 'true'] {
      display: block;
    }
  `
}

export default style
