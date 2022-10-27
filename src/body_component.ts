import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('body-component')
export class BodyComponent extends LitElement {

  public static override styles = css`
    img {
      display: block;
      width: 400px;
      height: 400px;
    }
  `;

  public override render() {
    return html`<p>欢迎大家来我的博客！在这里分享我的生活记录。
    </br>我很内向，不善于与人交流，但我很想和人分享很多东西，希望通过写博客锻炼表达能力。
    </p>
    <img src="./image/chapter-0-cover.png">`;
  }

}

