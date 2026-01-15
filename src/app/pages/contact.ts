import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `
    <div class="page">
      <h1>Contact</h1>
      <p>お問い合わせページです。</p>

      <section class="form-section">
        <h2>お問い合わせフォーム</h2>
        <form (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="name">お名前</label>
            <input
              type="text"
              id="name"
              [(ngModel)]="name"
              name="name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              [(ngModel)]="email"
              name="email"
              required
            />
          </div>

          <div class="form-group">
            <label for="message">メッセージ</label>
            <textarea
              id="message"
              [(ngModel)]="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn">送信</button>
        </form>

        @if (submitted()) {
          <div class="success-message">
            フォームが送信されました！（デモなので実際には送信されません）
          </div>
        }
      </section>

      <!-- スクロール復元デモ用の長いコンテンツ -->
      @for (i of items; track i) {
        <div class="card">
          <h3>Contact セクション {{ i }}</h3>
          <p>
            このページでもスクロール位置が復元されます。
            フォームに入力してからスクロールし、別のページに移動してみてください。
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
      color: #f57c00;
      margin-bottom: 1rem;
    }

    h2 {
      color: #333;
      margin-top: 1.5rem;
    }

    .form-section {
      background: #fff3e0;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 2rem 0;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      box-sizing: border-box;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #f57c00;
    }

    .submit-btn {
      background: #f57c00;
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }

    .submit-btn:hover {
      background: #e65100;
    }

    .success-message {
      margin-top: 1rem;
      padding: 1rem;
      background: #c8e6c9;
      border-radius: 4px;
      color: #2e7d32;
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
      color: #f57c00;
    }
  `,
})
export class ContactPage {
  protected name = '';
  protected email = '';
  protected message = '';
  protected readonly submitted = signal(false);

  protected readonly items = Array.from({ length: 6 }, (_, i) => i + 1);

  protected onSubmit(): void {
    this.submitted.set(true);
  }
}
