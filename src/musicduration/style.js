import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    div {
      display: flex;
      gap: var(--spacing_inset-xs);
      padding: var(--spacing_inset-xs);
      width: 100%;
      justify-content: space-between;

      span {
        color: var(--color-pure-white);
      }
    }
`
}

export default style
