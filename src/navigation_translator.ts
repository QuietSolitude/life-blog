import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('navigation-translator')
export class NavigationTranslator extends LitElement {

  public override render() {
    return html `<nav>
      <li>
        <a href="./daily_life.html">Lit</a>
        <a href="./diary.html">地道英语</a>
        <a href="./translator.html">待补充</a>
      </li>
    </nav>`;
  }
}