import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .membersmobile {
      height: 100vh;
      overflow: hidden;
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .membersmobile__background {
      filter: brightness(0.3);
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }

    .membersmobile__container {
      z-index: 1;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      max-width: 90%;
      height: 100%;
      padding: var(--spacing_inset-xs);
    }

    .membersmobile__actions {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
    }

    .membersmobile__action {
      color: var(--color-pure-white);
      width: 42px;
      height: 42px;
      position: relative;
      border-radius: 50%;


      &::before {
        content: "";
        display: block;
        position: absolute;
        display: block;
        width: 42px;
        height: 42px;
      }
    }

    .membersmobile__persons {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-md);
      height: 100%;
      justify-content: center;
      padding-top: var(--spacing_inset-md);
      width: 100%;
    }

    .membersmobile__risk {
      background-color: var(--color-pure-black);
      border-radius: 9px;
      border: 2px solid var(--color-orange);
      display: flex;
      padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
      width: 50%;
    }

    .membersmobile__character {
      height: 100%;
      width: 100%;
    }
`
}

export default style
