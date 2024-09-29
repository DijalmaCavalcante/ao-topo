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
      width: 100%;
      padding: 50px 0;
    }
    
    .hit__container {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.1);
      width: 80%;
      border-radius: 9px;
      padding: 0 var(--spacing_inset-xs);
    }

    @media(width >= 768px) {
      .hit__container {
        justify-content: start;
      }
    }
`
}

export default style
