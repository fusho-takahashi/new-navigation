import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <h1>About</h1>
      <p>このページは About ページです。</p>

      <section class="info-section">
        <h2>withExperimentalPlatformNavigation について</h2>
        <p>
          Angular v21.1 で追加された実験的な機能で、ブラウザの
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation API
          </a>
          と統合されています。
        </p>

        <h3>ブラウザサポート</h3>
        <p>
          Navigation API は現在、Chrome / Edge などの Chromium ベースのブラウザで
          サポートされています。Firefox と Safari は開発中です。
        </p>

        <h3>参考リンク</h3>
        <ul>
          <li>
            <a
              href="https://github.com/WICG/navigation-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigation API 仕様（WICG）
            </a>
          </li>
          <li>
            <a
              href="https://developer.chrome.com/docs/web-platform/navigation-api/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chrome Developers - Navigation API
            </a>
          </li>
        </ul>
      </section>

      <!-- スクロール復元デモ用の長いコンテンツ -->
      @for (i of items; track i) {
        <div class="card">
          <h3>About セクション {{ i }}</h3>
          <p>
            ここにもスクロールデモ用のコンテンツがあります。
            下までスクロールして、別のページに移動し、戻ってみてください。
          </p>
        </div>
      }
    </div>
  `,
  styles: `
    .page {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      color: #388e3c;
      margin-bottom: 1rem;
    }

    h2, h3 {
      color: #333;
      margin-top: 1.5rem;
    }

    .info-section {
      background: #e8f5e9;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 2rem 0;
    }

    .info-section a {
      color: #1976d2;
    }

    .info-section ul {
      padding-left: 1.5rem;
    }

    .info-section li {
      margin: 0.5rem 0;
    }

    .card {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1.5rem;
      margin: 1rem 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .card h3 {
      margin: 0 0 0.5rem;
      color: #388e3c;
    }
  `,
})
export class AboutPage {
  protected readonly items = Array.from({ length: 8 }, (_, i) => i + 1);
}
