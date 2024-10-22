import { html } from '@bake-js/-o-id/dom';
import background from '../assets/background.png'
import characters from './characters'

function component (self) {  
  return html`
    <section class="membersmobile">
      <img class="membersmobile__background" src="${background}" />
      <div class="membersmobile__container">
        
        <div class="membersmobile__buttonContainer">
          <at-icons class="membersmobile__action" use="arrowleft"></at-icons>
          <button class="membersmobile__button" id="kauanButton" current=${self.current === 'kauan'}>
            <img src="${characters.kauan.risk}" class="membersmobile__risk"/>
          </button>
          <at-icons class="membersmobile__action" use="arrowright"></at-icons>
        </div>

        <img class="membersmobile__kauan" src="${characters.lucas.person}" />

      </div>
    </section>
  `
}

export default component