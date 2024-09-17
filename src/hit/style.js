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
      height: 50vh;
      justify-content: center;
      overflow: hidden;
      width: 100%;
    }
    .hit_container {
      width: 100%;
      padding: 10px;
    }

    .hit__audio {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      height: 350px;
      padding: var(--spacing_inset-xs) var(--spacing_inset-giant);
      width: 1280px;
      display: flex;
      align-items: center;
      gap: var(--spacing_inset-xs);
    }
`
}

export default style
