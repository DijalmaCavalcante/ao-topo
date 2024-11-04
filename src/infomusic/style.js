import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .infomusic {
      align-items: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 9px;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      justify-content: center;
      width: 100%;
    }

    @media(width >= 768px) {
      .infomusic {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: var(--spacing_inset-xs);
      }
    }

    .infomusic__details {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      padding: var(--spacing_inset-lg);
      width: 100%;
    }

    @media(width >= 768px) {
      .infomusic__details {
        flex-direction: row;
        gap: var(--spacing_inset-xs);
      }
    }

    .infomusic__image {
      border-radius: 12px;
      max-width: 200px;
      width: 100%;
    }

    .infomusic__container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-md);
      width: 100%;
    }

    @media(width >= 768px) {
      .infomusic__container {
        align-items: start;
        justify-content: space-between;
      }
    }

    .infomusic__name {
      align-items: center;
      color: var(--color-pure-white);
      display: flex;
      flex-direction: column;
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
      margin-bottom: var(--spacing_inset-xs);
    }

    .infomusic__streams {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      justify-content: center;
      width: 100%;
    }

    @media(width >= 768px) {
      .infomusic__streams {
        align-items: start;
        flex-direction: column-reverse;
      }
    }

    .infomusic__icons {
      display: flex;
      gap: var(--spacing_inset-xs);

      a {
        cursor: pointer;
      }
    }

    @media(width >= 768px) {
      .infomusic__icons {
        gap: var(--spacing_inset-nano);
      }
    }

    .infomusic__player {
      width: 100%;
    }
  `
}

export default style
