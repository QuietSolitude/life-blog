import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('navigation-component')
export class NavigationComponent extends LitElement {

  public override render() {
    return html `<nav>
      <li>
        <a href="./daily_life.html">日常</a>
        <a href="./diary.html">日记</a>
        <a href="./translator.html">翻译</a>
      </li>
    </nav>`;
  }
}