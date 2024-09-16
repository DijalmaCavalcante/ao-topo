import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .banner {
      height: 100vh;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .banner_background {
      filter: brightness(0.5);
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }

    .banner_container {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      position: absolute;
      text-align: center;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .banner_social {
      display: flex;
      gap: var(--spacing_inset-xs);
      z-index: 1;
      width: 100%;
      justify-content: center;
    }

    .banner_icon {
      border-radius: 50%;
      transition: background-color 0.3s ease, transform 0.3s ease;;
    }

    .banner_icon:hover {
      background-color: var(--color-orange);
      border-radius: 50%;
      transform: scale(1.1);
    }
`
}

export default style
