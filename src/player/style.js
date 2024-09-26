import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
  .player-container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .controls button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
  }

  .controls button:hover {
    background-color: #0056b3;
  }

  .progress-container {
    width: 100%;
    height: 5px;
    background-color: #ddd;
    margin: 10px 0;
    border-radius: 5px;
  }

  #progress {
    width: 0;
    height: 100%;
    background-color: #007bff;
    border-radius: 5px;
  }

  #current-time, #duration {
    font-size: 14px;
  }
`
}

export default style
