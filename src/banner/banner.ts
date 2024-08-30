import { define } from '@bake-js/-o-id';
import { html, paint, repaint } from '@bake-js/-o-id/dom';
import on from '@bake-js/-o-id/event';
import style from './style'

function component(self) {
  return html`
    <button >Increment ${self.number}</button>
  `;
}

@define('at-banner')
@paint(component)
class Counter extends HTMLElement {
  #number;

  get number() {
    return (this.#number ??= 0);
  }

  set number(value) {
    this.#number = value;
  }

  @on.click('button')
  @repaint
  increment() {
    this.number += 1;
    return this;
  }
}