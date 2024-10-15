import { html } from '@bake-js/-o-id/dom';
import background from './background.png'
import characters from './characters'

function component (self) {  
  return html`
    <section class="members">
      <img class="members_background" src="${background}" />
      <div class="members_container">

        <div class="members_group" id="kauan" current=${self.current === 'kauan'}>
          <img class="members_description" src="${characters.kauan.description}" />
          <img class="members_kauan" src="${characters.kauan.person}" />
        </div>
        <div class="members_group" id="bene" current=${self.current === 'bene'}>
          <img class="members_description" src="${characters.bene.description}" />
          <img class="members_bene" src="${characters.bene.person}" />
        </div>
        <div class="members_group" id="dijalma" current=${self.current === 'dijalma'}>
          <img class="members_description" src="${characters.dijalma.description}" />
          <img class="members_dijalma" src="${characters.dijalma.person}" />
        </div>
        <div class="members_group" id="wallace" current=${self.current === 'wallace'}>
          <img class="members_description" src="${characters.wallace.description}" />
          <img class="members_wallace" src="${characters.wallace.person}" />
        </div>
        <div class="members_group" id="lucas" current=${self.current === 'lucas'}>
          <img class="members_description" src="${characters.lucas.description}" />
          <img class="members_lucas" src="${characters.lucas.person}" />
        </div>

        <div class="members_nav">
          <button class="members__button" id="kauanButton" current=${self.current === 'kauan'}>
            <img src="${characters.kauan.risk}" class="members__person"/>
          </button>
          <button class="members__button" id="beneButton" current=${self.current === 'bene'}>
            <img src="${characters.bene.risk}" class="members__person"/>
          </button>
          <button class="members__button" id="dijalmaButton" current=${self.current === 'dijalma'}>
            <img src="${characters.dijalma.risk}" class="members__person"/>
          </button>
          <button class="members__button" id="wallaceButton" current=${self.current === 'wallace'}>
            <img src="${characters.wallace.risk}" class="members__person"/>
          </button>
          <button class="members__button" id="lucasButton" current=${self.current === 'lucas'}>
            <img src="${characters.lucas.risk}" class="members__person"/>
          </button>
        </div>

      </div>
    </section>
  `
}

export default component