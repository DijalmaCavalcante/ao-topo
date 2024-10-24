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
      width: 32px;
      height: 32px;
    }

    .player__playpause {
      color: var(--color-orange);
      background: none;
      border: none;
      cursor: pointer;
      fill: var(--color-orange);
      display: none;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
    }

    .player__playpause[current = "true"] {
      display: flex;
    }

    .player__progress {
      display: flex;
      flex-direction: column;
      width: 90%;
      gap: var(--spacing_inset-quarck);
      padding-top: 15px;
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
