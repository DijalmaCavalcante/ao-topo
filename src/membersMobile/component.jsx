import { html } from '@bake-js/-o-id/dom';
import background from '../assets/background.png'
import characters from './characters'

function component (self) {  
  return html`
    <section class="membersMobile">
      <img class="membersMobile__background" src="${background}" />
      <div class="membersMobile__container">
        
      <div class="membersMobile__buttonContainer">
        <button class="membersMobile__button" id="kauanButton" current=${self.current === 'kauan'}>
          <img src="${characters.bene.risk}" class="membersMobile__risk"/>
        </button>
      </div>

        <img class="membersMobile__kauan" src="${characters.bene.person}" />

      </div>
    </section>
  `
}

export default component