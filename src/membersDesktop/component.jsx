import { html } from '@bake-js/-o-id/dom';
import background from '../assets/background.png'
import characters from './characters'

function component (self) {  
  return html`
    <section class="membersDesktop">
      <img class="membersDesktop_background" src="${background}" />
      <div class="membersDesktop_container">

        <div class="membersDesktop_group" id="kauan" current=${self.current === 'kauan'}>
          <img class="membersDesktop_description" src="${characters.kauan.description}" />
          <img class="membersDesktop_kauan" src="${characters.kauan.person}" />
        </div>
        <div class="membersDesktop_group" id="bene" current=${self.current === 'bene'}>
          <img class="membersDesktop_description" src="${characters.bene.description}" />
          <img class="membersDesktop_bene" src="${characters.bene.person}" />
        </div>
        <div class="membersDesktop_group" id="dijalma" current=${self.current === 'dijalma'}>
          <img class="membersDesktop_description" src="${characters.dijalma.description}" />
          <img class="membersDesktop_dijalma" src="${characters.dijalma.person}" />
        </div>
        <div class="membersDesktop_group" id="wallace" current=${self.current === 'wallace'}>
          <img class="membersDesktop_description" src="${characters.wallace.description}" />
          <img class="membersDesktop_wallace" src="${characters.wallace.person}" />
        </div>
        <div class="membersDesktop_group" id="lucas" current=${self.current === 'lucas'}>
          <img class="membersDesktop_description" src="${characters.lucas.description}" />
          <img class="membersDesktop_lucas" src="${characters.lucas.person}" />
        </div>

        <div class="membersDesktop_nav">
          <button class="membersDesktop__button" id="kauanButton" current=${self.current === 'kauan'}>
            <img src="${characters.kauan.risk}" class="membersDesktop__person"/>
          </button>
          <button class="membersDesktop__button" id="beneButton" current=${self.current === 'bene'}>
            <img src="${characters.bene.risk}" class="membersDesktop__person"/>
          </button>
          <button class="membersDesktop__button" id="dijalmaButton" current=${self.current === 'dijalma'}>
            <img src="${characters.dijalma.risk}" class="membersDesktop__person"/>
          </button>
          <button class="membersDesktop__button" id="wallaceButton" current=${self.current === 'wallace'}>
            <img src="${characters.wallace.risk}" class="membersDesktop__person"/>
          </button>
          <button class="membersDesktop__button" id="lucasButton" current=${self.current === 'lucas'}>
            <img src="${characters.lucas.risk}" class="membersDesktop__person"/>
          </button>
        </div>

      </div>
    </section>
  `
}

export default component