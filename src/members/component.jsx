import { html } from '@bake-js/-o-id/dom';
import background from './background.png'
import bene from './bene.png'
import benet from './benet.png'
import dijalma from './dijalma.png'
import dijalmat from './dijalmat.png'

function component () {

  return html`
    <section class="members">
      <img class="members_background" src="${background}" />
      <div class="members_container">
        <div class="members_group">
          <img class="members_description" src="${benet}" />
          <img class="members_character" src="${bene}" />
        </div>
        
        <!-- <img src="${dijalma}" />
        <img src="${dijalmat}" /> -->
      </div>t
    </section>
  `

}

export default component
