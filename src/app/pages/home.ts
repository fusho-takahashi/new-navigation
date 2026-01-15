import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <h1>Home</h1>
      <p>
        このページは <code>withExperimentalPlatformNavigation()</code> のデモです。
      </p>

      <section class="feature-section">
        <h2>Navigation API の特徴</h2>
        <ul>
          <li>
            <strong>RouterLink なしのアンカータグをインターセプト:</strong>
            通常の &lt;a href="/path"&gt; タグでも SPA ナビゲーションとして動作します。
          </li>
          <li>
            <strong>ネイティブのスクロール復元:</strong>
            ブラウザの組み込み機能でスクロール位置が復元されます。
          </li>
          <li>
            <strong>進行中のナビゲーション通知:</strong>
            アクセシビリティアナウンスやローディングインジケーターなどが利用可能になります。
          </li>
        </ul>
      </section>

      <!-- スクロール復元デモ用の長いコンテンツ -->
      <section class="demo-content">
        <h2>スクロール復元のデモ</h2>
        <p>
          このページを下にスクロールしてから他のページに移動し、
          ブラウザの「戻る」ボタンで戻ってきてください。
          スクロール位置が自動的に復元されます。
        </p>
        @for (i of items; track i) {
          <div class="card">
            <h3>セクション {{ i }}</h3>
            <p>
              これはスクロール復元をデモするためのコンテンツです。
              Navigation API を使用すると、ブラウザがネイティブで
              スクロール位置を管理してくれます。
            </p>
          </div>
        }
      </section>
    </div>
  `,
  styles: `
    .page {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      color: #1976d2;
      margin-bottom: 1rem;
    }

    h2 {
      color: #333;
      margin-top: 2rem;
    }

    code {
      background: #f5f5f5;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-family: monospace;
    }

    .feature-section {
      background: #e3f2fd;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 2rem 0;
    }

    .feature-section ul {
      padding-left: 1.5rem;
    }

    .feature-section li {
      margin: 0.75rem 0;
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
      color: #1976d2;
    }
  `,
})
export class HomePage {
  // スクロールデモ用のアイテム
  protected readonly items = Array.from({ length: 10 }, (_, i) => i + 1);
}
