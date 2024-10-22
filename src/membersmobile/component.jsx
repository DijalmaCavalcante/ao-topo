import { html } from '@bake-js/-o-id/dom';
import background from '../assets/background.png'

function component (self) {  
  return html`
    <section class="membersmobile">
      <img class="membersmobile__background" src="${background}" />
      <div class="membersmobile__container">
        <div class="membersmobile__actions">
          <at-icons id="prev" class="membersmobile__action" use="arrowleft" ></at-icons>
          <at-icons class="membersmobile__action" use="arrowright" id="next"></at-icons>
        </div>
        <div class="membersmobile__persons">
          <img class="membersmobile__risk" src="${self.characters.risk}" />
          <img class="membersmobile__character" src="${self.characters.person}" />
        </div>
      </div>
    </section>
  `
}

export default component