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
      width: 350px;
      align-self: center;
    }

    .members_bene {
      width: 45%;
      height: 80%;
    }

    .members_dijalma {
      width: 60%;
      height: 80%;
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
      color: var(--color-pure-white);
      font-size: var(--font-size-xs);
      background-color: var(--color-pure-black);
      padding: var(--spacing_inset-nano);
      border-radius: 9px;
      border: 1px solid var(--color-orange);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .members__person {
      width: 50%;
    }

`
}

export default style
