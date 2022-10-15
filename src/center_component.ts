import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('center-component')
export class CenterComponent extends LitElement {

  public static override styles = css`
    div { 
      width:600px;
      margin:auto
    }`;

  public override render() {
    return html`
    <div>
      <slot></slot>
    </div>`;
  }
}
