import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item } from '../services/mock-api.service';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="page">
      <h1>Home - アイテム一覧</h1>
      <p>
        このページは resolver でデータをフェッチしています。
        コンソールでフェッチ回数を確認できます。
      </p>

      <section class="info-section">
        <h2>resolver フェッチのデモ</h2>
        <p>
          アイテムをクリックして詳細ページへ遷移し、ブラウザの「戻る」ボタンで
          戻ってきてください。<strong>再度フェッチが走る</strong>ことを確認できます。
        </p>
      </section>

      <section class="items-section">
        <h2>アイテム一覧</h2>
        @for (item of items(); track item.id) {
          <a class="card" [routerLink]="['/item', item.id]">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </a>
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

    a.card {
      display: block;
      text-decoration: none;
      color: inherit;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    a.card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    .info-section {
      background: #fff3e0;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 2rem 0;
    }
  `,
})
export class HomePage {
  // resolver から受け取るデータ（withComponentInputBinding 経由）
  items = input.required<Item[]>();
}
