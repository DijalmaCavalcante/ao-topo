import { css } from '@bake-js/-o-id/dom'
import background from './background.jpg'

function style () {
  return css`
    .hit {
      align-items: center;
      background-image: url(${background});
      background-repeat: round;
      background-size: cover;
      display: flex;
      justify-content: center;
      overflow: hidden;
      padding: var(--spacing_inset-huge) var(--spacing_inset-sm);
    }

    .hit__infomusic {
      width: 100%;
      max-width: 968px;
    }
`
}

export default style
