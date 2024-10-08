import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .members {
      height: 100vh;
      overflow: hidden;
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .members_background {
      filter: brightness(0.3);
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }

    .members_container {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      max-width: 1280px;
      width: 100%;
      position: absolute;
      text-align: center;
      top: 0;
      z-index: 1;
    }

    .members_group {
      display: flex;
      gap: var(--spacing_inset-xs);
      width: 100%;
      justify-content: space-around;
      align-items: end;
      height: 100%;
    }

    .members_description {
      width: 350px;
      align-self: center;
    }

    .members_character {
      width: 600px;
    }

    .members_nav {
      display: flex;
      z-index: 2;
      align-self: end;
      position: absolute;
      padding-bottom: var(--spacing_inset-sm);
      justify-content: space-evenly;
      width: 90%;

      span {
        color: var(--color-pure-white);
        font-size: var(--font-size-xs);
      }
    }
`
}

export default style
