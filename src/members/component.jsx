import { html } from '@bake-js/-o-id/dom';
import bene from './bene.png'
import benet from './benet.png'
import dijalma from './dijalma.png'
import dijalmat from './dijalmat.png'

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

  return html`
    <section class="memberscontainer">
      <div class="memberhighlight">
        <img src="${member.image}" alt="${member.name}" class="highlightimage">
        <img src="${member.textImage}" alt="${member.name} descrição" class="textimage">
      </div>
      <div class="memberslist">
        ${Object.keys(members).map(memberKey => html`
          <button @click=${() => this.changeMember(memberKey)}>${members[memberKey].name}</button>
        `)}
      </div>
    </section>
  `;
}

export default component;
