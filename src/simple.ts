import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('simple-component')
export class SimpleComponent extends LitElement {

  @property()
  public name?: string = 'World,TypeScript';

  public override render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}