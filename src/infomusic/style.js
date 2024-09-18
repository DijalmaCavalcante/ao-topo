import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .infomusic {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .infomusic__image {
      width: 200px;
      border-radius: 12px;
    }

    .infomusic__musicname {
      padding-top: var(--spacing_inset-xs);
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-nano);
      align-items: center;

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
