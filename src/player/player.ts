import { paint, didPaint } from '@bake-js/-o-id/dom';
import component from './component'
import { define } from '@bake-js/-o-id';
import style from './style';
import Echo from '@bake-js/-o-id/echo'
import { onProgress } from './interfaces'

@define('at-player')
@paint(component, style)
class Player extends Echo(HTMLElement) {
  #audio

  get audio () {
    return (this.#audio ??= this.shadowRoot.querySelector('audio'))
  }

  constructor () {
    super();
    this.attachShadow({ mode: "open" });
  }

  play () {
    this.audio.play()
    const event = new CustomEvent('play')
    this.dispatchEvent(event)
    return this
  }

  pause () {
    this.audio.pause()
    const event = new CustomEvent('pause')
    this.dispatchEvent(event)
    return this
  }

  @didPaint
  [onProgress] () {
    let lastTime = 0; // Armazena o tempo da última atualização

    this.audio.addEventListener('timeupdate', () => {
      const { currentTime, duration } = this.audio;
      const currentTimeInSeconds = Math.floor(currentTime); // Arredonda para segundos inteiros
      const init = { detail: ((currentTimeInSeconds / duration) * 100).toFixed(2) };
  
      // Só dispara o evento se passou 1 segundo desde a última atualização
      if (currentTimeInSeconds !== lastTime) {
        lastTime = currentTimeInSeconds; // Atualiza o último tempo
  
        const event = new CustomEvent('progress', init);
        this.dispatchEvent(event);
      }
    })

    return this
  }
  
}

export default Player;

