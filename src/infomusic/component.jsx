import { html } from '@bake-js/-o-id/dom';
import background from './background.png';

function component () {  
  return html`
    <div class="infomusic">

        <div class="infomusic__details">
          <img class="infomusic__image" src="${background}" alt="capa da musica" />

          <div class="infomusic__container">
            <div class="infomusic__name">
              <span class="infomusic__title">Fazer valer</span>
              <span class="infomusic__bandname">Ao Topo</span>
            </div>

            <div class="infomusic__streams">

              <at-player class="infomusic__player"></at-player>

              <div class="infomusic__icons">
                <a href="#"> <at-icons use="spotify" aria-label="spotify"/> </a>
                <a href="#"> <at-icons use="youtube" aria-label="youtube"/> </a>
                <a href="#"> <at-icons use="apple" aria-label="apple"/> </a>
                <a href="#"> <at-icons use="amazon" aria-label="amazon"/> </a>
                <a href="#"> <at-icons use="deezer" aria-label="deezer"/> </a>
              </div>

            </div>
          </div>

        </div>

    </div>
  `;
}

export default component;
