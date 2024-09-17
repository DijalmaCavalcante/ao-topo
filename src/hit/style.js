import { css } from '@bake-js/-o-id/dom'
import background from './background.jpg'

function style () {
  return css`
    .hit {
      background-image: url(${background});
      height: 50vh;
      overflow: hidden;
      position: relative;
      width: 100%;
      background-size: cover;
      background-repeat: round;
      position: relative;
    }

    .hit__container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0 var(--spacing_inset-giant);
    }

    .hit__audio {
      height: 300px;
      background-color: rgba(255, 255, 255, 0.1);
      width: 100%;
      padding: var(--spacing_inset-xs);
      border-radius: 8px;
      display: flex;
      align-items: center;
      z-index: 1;
      position: absolute;
    }
`
}

export default style
