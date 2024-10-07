import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .infomusic__container {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 9px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing_inset-xs);
      width: 100%;
      justify-content: center;
    }

    @media(width >= 768px) {
      .infomusic__container {
        flex-direction: row;
        display: flex;
        gap: var(--spacing_inset-xs);
        align-items: center;
      }
    }

    .infomusic__details {
      flex-direction: column;
      display: flex;
      gap: var(--spacing_inset-quarck);
      align-items: center;
      width: 100%;
      padding: 40px;
    }

    @media(width >= 768px) {
      .infomusic__details {
        flex-direction: row;
        gap: var(--spacing_inset-xs);
      }
    }

    .infomusic__image {
      width: 100%;
      max-width: 200px;
      border-radius: 12px;
    }

    .infomusic__teste {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 200px;
      width: 100%;
      gap: var(--spacing_inset-md);
    }

    @media(width >= 768px) {
      .infomusic__teste {
        align-items: start;
        justify-content: space-between;
      }
    }

    .infomusic__name {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-family: var(--font-family-principal);
        color: var(--color-pure-white);
      }
    }

    @media(width >= 768px) {
      .infomusic__name {
        align-items: flex-start;
      }
    }

    .infomusic__title {
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
    }

    .infomusic__bandname {
      font-size: var(--font-size-nano);
      margin-bottom: 10px;
    }

    .infomusic__streams {
      display: flex;
      gap: var(--spacing_inset-xs);
    }

    .infomusic__player {
      width: 100%;
    }
`
}

export default style
