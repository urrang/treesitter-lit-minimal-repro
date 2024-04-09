import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {

  render() {
    return html`
      <h1 class="greeting">Hello world</h1>
    `
  }

  static styles = css`
    h1.greeting {
      color: blue;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
