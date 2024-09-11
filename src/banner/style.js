import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .banner {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }

    .banner_video {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }

    .banner_container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
      z-index: 1;
    }

    .banner_social {
      display: flex;
      gap: var(--spacing_inset-xs);
      z-index: 2;
    }
`
}

export default style
