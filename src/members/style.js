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
      display: none;
      gap: var(--spacing_inset-xs);
      width: 100%;
      justify-content: space-around;
      align-items: end;
      height: 100%;
    }

    .members_group[current = "true"] {
      display: flex;
    }

    .members_description {
      max-width: 25%;
      align-self: center;
    }

    .members_kauan {
      max-width: 70%;
      transform: scaleX(-1);
      max-height: 90%;
    }

    .members_bene {
      max-width: 90%;
      max-height: 90%;
    }

    .members_dijalma {
      max-width: 70%;
      max-height: 90%;
    }

    .members_wallace {
      max-width: 90%;
      max-height: 90%;
    }

    .members_lucas {
      max-width: 47%;
      max-height: 90%;
    }

    .members_nav {
      display: flex;
      z-index: 2;
      align-self: end;
      position: absolute;
      padding-bottom: var(--spacing_inset-sm);
      justify-content: space-evenly;
      width: 90%;
      gap: var(--spacing_inset-md);
    }

    .members__button {
      background-color: var(--color-master);
      border-radius: 9px;
      border: 2px solid var(--color-master-light);
      color: var(--color-pure-white);
      cursor: pointer;
      display: flex;
      font-size: var(--font-size-xs);
      justify-content: center;
      padding: var(--spacing_inset-nano);
      position: relative;
      width: 100%;
      align-items: center;
      opacity: 0.8;

      &::before {
        content: "";
        display: block;
        position: absolute;
        display: block;
        height: 100%;
        width: 100%;
      }
    }

    .members__button[current = "true"] {
      border: 2px solid var(--color-orange);
      background-color: var(--color-pure-black);
      opacity: 1;
    }

    .members__person {
      width: 50%;
    }

`
}

export default style
