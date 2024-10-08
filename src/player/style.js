import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .player {
      width: 100%;
      display: flex;
      gap: var(--spacing_inset-xs);
      align-items: center;
      flex-direction: column;
    }

    @media(width >= 768px) {
      .player {
        flex-direction: row;
      }
    }

    .player__controls {
      display: flex;
      gap: var(--spacing_inset-quarck);
    }

    .player__action {
      color: var(--color-orange);
      background: none;
      border: none;
      cursor: pointer;
    }

    .player__progress {
      display: flex;
      flex-direction: column;
      width: 90%;
      gap: var(--spacing_inset-quarck);
    }

    .player__bar {
      height: 10px;
      background-color: white;
      border-radius: 8px;
      width: 100%;
      min-width: 200px;
    }

    .player__timer {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .player__duration {
      font-size: var(--font-size-micro);
      color: var(--color-pure-white);
    }
  `
}

export default style
