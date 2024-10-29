import { html } from '@bake-js/-o-id/dom';
import bene1 from './assets/bene1.jpg';
import wallace1 from './assets/wallace1.jpg';
import dijalma from './assets/dijalma.jpg';
import lucas1 from './assets/lucas1.jpg';
import kauan1 from './assets/kauan1.jpg';
import principal from './assets/principal.jpg';
import bene2 from './assets/bene2.jpg';
import wallace2 from './assets/wallace2.jpg';
import lucas2 from './assets/lucas2.jpg';
import kauan2 from './assets/kauan2.jpg';


function component () {  
  return html`
    <section class="photo-gallery">
      <img src="${bene1}" alt="Photo 1">
      <img src="${wallace1}" alt="Photo 2">
      <img src="${dijalma}" alt="Photo 3">
      <img src="${lucas1}" alt="Photo 4">
      <img src="${kauan1}" alt="Photo 5">
      <img src="${bene2}" alt="Photo 6">
      <img src="${wallace2}" alt="Photo 7">
      <img src="${lucas2}" alt="Photo 8">
      <img src="${kauan2}" alt="Photo 9">
      </section>


  `
}

export default component
