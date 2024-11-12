import { html } from '@bake-js/-o-id/dom';

function component (self) {  
  return html`
    <div>
      <span>${self.value}</span>
      <span>0:00</span>
    </div>
  `
}

export default component