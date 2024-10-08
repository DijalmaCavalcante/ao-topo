import { paint } from '@bake-js/-o-id/dom';
import component from './component'
import { define } from '@bake-js/-o-id';
import style from './style'

@define('at-members')
@paint(component, style)
class Members extends HTMLElement {
  selectedMember = 'bene'; // Estado inicial

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  // Função para alterar o membro selecionado
  changeMember(memberKey: string) {
    this.selectedMember = memberKey;
    this.render(); // Atualiza a interface
  }

  render() {
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(component({ selectedMember: this.selectedMember }));
  }
}

export default Members;
