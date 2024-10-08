import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .memberscontainer {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-image: url('background-image.png');
      background-size: cover;
      background-attachment: fixed;
    }

    .memberhighlight {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .highlightimage {
      width: 300px;
      height: auto;
      border: 3px solid orange;
    }

    .textimage {
      width: 200px;
      height: auto;
      margin-left: 20px;
    }

    .memberslist {
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    .memberslist button {
      background-color: transparent;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
    }

    .memberslist button:hover {
      color: orange;
    }
`
}
export default style

