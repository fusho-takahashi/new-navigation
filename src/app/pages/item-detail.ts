import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item } from '../services/mock-api.service';

@Component({
  selector: 'app-item-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="page">
      <a routerLink="/" class="back-link">← 一覧に戻る</a>

      @if (item(); as item) {
        <h1>{{ item.title }}</h1>
        <p class="description">{{ item.description }}</p>

        <section class="detail-section">
          <h2>詳細情報</h2>
          <dl>
            <dt>ID</dt>
            <dd>{{ item.id }}</dd>
            <dt>タイトル</dt>
            <dd>{{ item.title }}</dd>
          </dl>
        </section>
      }

      <section class="info-section">
        <p>
          ブラウザの「戻る」ボタンで一覧ページに戻ると、<br />
          <strong>resolver が再度実行され、フェッチが走ります。</strong><br />
          コンソールで確認してください。
        </p>
      </section>
    </div>
  `,
  styles: `
    .page {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .back-link {
      display: inline-block;
      color: #1976d2;
      text-decoration: none;
      margin-bottom: 1rem;
    }

    .back-link:hover {
      text-decoration: underline;
    }

    h1 {
      color: #1976d2;
      margin-bottom: 1rem;
    }

    .description {
      font-size: 1.1rem;
      color: #666;
    }

    .detail-section {
      background: #e3f2fd;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 2rem 0;
    }

    .detail-section h2 {
      margin-top: 0;
    }

    dl {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.5rem 1rem;
    }

    dt {
      font-weight: 600;
      color: #333;
    }

    dd {
      margin: 0;
      color: #666;
    }

    .info-section {
      background: #fff3e0;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 2rem 0;
    }
  `,
})
export class ItemDetailPage {
  // resolver から受け取るデータ
  item = input.required<Item>();
}
