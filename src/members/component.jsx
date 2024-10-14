import { html } from '@bake-js/-o-id/dom';
import background from './background.png'
import bene from './bene.png'
import benet from './benet.png'
import dijalma from './dijalma.png'
import dijalmat from './dijalmat.png'
import relato from './relato.png'

function component (self) {
  console.log(self.current);
  
  return html`
    <section class="members">
      <img class="members_background" src="${background}" />
      <div class="members_container">

        <div class="members_group" id="bene" current=${self.current === 'bene'}>
          <img class="members_description" src="${benet}" />
          <img class="members_character" src="${bene}" />
        </div>

        <div class="members_group" id="dijalma" current=${self.current === 'dijalma'}>
          <img class="members_description" src="${dijalmat}" />
          <img class="members_character" src="${dijalma}" />
        </div>

        <div class="members_nav">
          <button class="relato" id="beneButton" current=${self.current === 'bene'}>
            <img src="${relato}" />
          </button>
          <button class="relato" id="dijalmaButton" current=${self.current === 'dijalma'}>
            <img src="${relato}" />
          </button>
        </div>

      </div>
    </section>
  `
}

export default component