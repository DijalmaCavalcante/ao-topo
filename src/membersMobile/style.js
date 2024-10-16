import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .membersMobile {
      height: 100vh;
      overflow: hidden;
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .membersMobile__background {
      filter: brightness(0.3);
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }

    .membersMobile__container {
      z-index: 2;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: var(--spacing_inset-xs);
    }

    .membersMobile__kauan {
      height: 70%;
      width: 100%;
    }

    .membersMobile__buttonContainer {
      padding: var(--spacing_inset-giant);
      display: flex;
      justify-content: center;
    }

    .membersMobile__button {
      border: 2px solid var(--color-orange);
      background-color: var(--color-pure-black);
      width: 80%;
      padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
      border-radius: 9px;
    }

    .membersMobile__risk {
      width: 100%;
    }

`
}

export default style
