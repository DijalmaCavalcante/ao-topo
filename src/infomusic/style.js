import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .infomusic {
      display: flex;
      padding: var(--spacing_inset-xs);
      width: 100%;
    }

    .infomusic__container {
      display: flex;
      gap: var(--spacing_inset-xs);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: var(--spacing_inset-xs);
    }

    @media(width >= 768px) {
      .infomusic__container {
        flex-direction: row;
      }
    }

    .infomusic__image {
      width: 150px;
      border-radius: 12px;
    }

    .infomusic__informations {
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      align-items: center;
    }

    @media(width >= 768px) {
      .infomusic__informations {
        align-items: start;
        justify-content: space-between;
        height: 100%;
      }
    }

    .infomusic__musicname {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-family: var(--font-family-principal);
        color: var(--color-pure-white);
      }
    }

    @media(width >= 768px) {
      .infomusic__musicname {
        align-items: start;
      }
    }

    .infomusic__title {
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
    }

    .infomusic__bandname {
      font-size: var(--font-size-nano);
    }
    
    @media(width >= 768px) {
      .infomusic {
        display: flex;
        gap: var(--spacing_inset-md);
        flex-direction: row;
      }

      .infomusic__image {
        width: 234px;
        border-radius: 12px;
      }

      .infomusic__musicname {
        padding-top: var(--spacing_inset-xs);
        display: flex;
        flex-direction: column;
        gap: var(--spacing_inset-nano);

        span {
          font-family: var(--font-family-principal);
          color: var(--color-pure-white);
        }
      }

      .infomusic__title {
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-medium);
      }

      .infomusic__bandname {
        font-size: var(--font-size-nano);
      }
    }
`
}

export default style
