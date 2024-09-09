import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .banner {
      position: relative;
      width: 100%;
      height: 100vh; /* Ocupa toda a altura da tela */
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
    }

    .banner_logo {
      width: 130%;
    }

    @media(width >= 500px) {
      .banner_logo {
        width: 100%;
      }
    }

    @media(width >= 768px) {
      .banner_logo {
        width: 70%;
      }
    }

    @media(width >= 1000px) {
      .banner_logo {
        width: 60%;
      }
    }

    @media(width >= 1200px) {
      .banner_logo {
        width: 50%;
      }
    }

    .banner_social {
      display: flex;
      gap: var(--spacing_inset-xs);
    }

    .banner_social {
      img {
        width: 16px;
      }
    }
`
}

export default style
