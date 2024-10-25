import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .membersmobile {
      align-items: center;
      display: flex;
      height: 100vh;
      justify-content: center;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .membersmobile__background {
      filter: brightness(0.3);
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }

    .membersmobile__container {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      max-width: 90%;
      padding: var(--spacing_inset-xs);
      position: relative;
      z-index: 1;
    }

    .membersmobile__actions {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: space-between;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 2;
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
      width: 100%;
      position: relative;
      padding-top: 10px;
    }

    .membersmobile__risk {
      background-color: var(--color-pure-black);
      border-radius: 9px;
      border: 2px solid var(--color-orange);
      display: flex;
      padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
      width: 50%;
      z-index: 2;
      position: absolute;
      bottom: 0;
      margin-bottom: var(--spacing_inset-md);
    }

    .membersmobile__character {
      width: 100%;
      height: 100%;
      max-width: 100%;
    }
`
}

export default style
