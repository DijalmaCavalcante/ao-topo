import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .membersdesktop {
      align-items: center;
      display: flex;
      height: 100vh;
      justify-content: center;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .membersdesktop_background {
      background-repeat: no-repeat;
      filter: brightness(0.3);
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }

    .membersdesktop_container {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      max-width: 1280px;
      position: absolute;
      text-align: center;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .membersdesktop_group {
      align-items: end;
      display: none;
      gap: var(--spacing_inset-xs);
      height: 100%;
      justify-content: space-around;
      width: 100%;
    }

    .membersdesktop_group[current = "true"] {
      display: flex;
    }

    .membersdesktop_description {
      max-width: 30%;
      align-self: center;
    }

    .membersmobile__character {
      width: 600px;
      height: 800px;
    }

    .membersdesktop_nav {
      display: flex;
      z-index: 2;
      align-self: end;
      position: absolute;
      padding-bottom: var(--spacing_inset-sm);
      justify-content: space-evenly;
      width: 90%;
      gap: var(--spacing_inset-md);
    }

    .membersdesktop__button {
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

    .membersdesktop__button[current = "true"] {
      border: 2px solid var(--color-orange);
      background-color: var(--color-pure-black);
      opacity: 1;
    }

    .membersdesktop__person {
      width: 50%;
    }

`
}

export default style
