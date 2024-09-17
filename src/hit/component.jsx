import { html } from '@bake-js/-o-id/dom';

function component () {
  return html`
    <section class="hit">
      <div class="hit__container">
        <div class="hit__audio">
          <at-cover></at-cover>
          <div>
            <at-musicname></musicname>
            <span>teste</span>
          </div>
        </div>
      </div>
    </section>
  `

}

export default component
