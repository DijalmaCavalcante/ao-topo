import { html } from '@bake-js/-o-id/dom';
import background from './background.png'
import bene from './bene.png'
import benet from './benet.png'
import dijalma from './dijalma.png'
import dijalmat from './dijalmat.png'

<<<<<<< HEAD
function component () {
=======
function component ({ selectedMember }) {  
  const members = {
    bene: {
      name: 'Bene',
      description: 'Minha história começou...',
      image: {bene},
      textImage: {benet}
    },
    dijalma: {
      name: 'Dijalma',
      description: 'Dijalma começou a tocar..',
      image: {dijalma},
      textImage: {dijalmat}
    },
    // Adicione mais membros aqui conforme necessário
  };

  const member = members[selectedMember];
>>>>>>> b0558ec4f056e5d292aab307428fc7833c5a6b99

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
