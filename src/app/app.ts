import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <h1 class="logo">Navigation API Demo</h1>

      <nav class="nav" aria-label="Main navigation">
        <!-- RouterLink を使用したナビゲーション -->
        <div class="nav-section">
          <span class="nav-label">RouterLink:</span>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            Home
          </a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </div>

        <!-- 通常の href を使用したナビゲーション -->
        <!-- withExperimentalPlatformNavigation() により、これも SPA ナビゲーションになる -->
        <div class="nav-section">
          <span class="nav-label">Plain href:</span>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </header>

    <div class="main-content" [attr.inert]="isNavigating() || null">
      @if (isNavigating()) {
        <div class="loading-overlay" role="status" aria-label="ページを読み込み中">
          <div class="spinner"></div>
          <p>Loading...</p>
        </div>
      }

      <main>
        <router-outlet />
      </main>

      <footer class="footer">
      <p>
        Angular v21 - <code>withExperimentalPlatformNavigation()</code> Demo
      </p>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>機能</th>
            <th>RouterLink</th>
            <th>Plain href</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SPA ナビゲーション</td>
            <td class="yes">✓</td>
            <td class="yes">✓</td>
          </tr>
          <tr>
            <td>タブのスピナー表示</td>
            <td class="no">-</td>
            <td class="yes">✓</td>
          </tr>
          <tr>
            <td>更新→停止ボタン変化</td>
            <td class="no">-</td>
            <td class="yes">✓</td>
          </tr>
          <tr>
            <td>スクロール復元</td>
            <td class="yes">✓</td>
            <td class="yes">✓</td>
          </tr>
        </tbody>
      </table>

      <p class="note">
        Plain href は Navigation API を通じてブラウザに通知されるため、<br />
        ネイティブ UI（タブスピナー、停止ボタン等）が反応します。
      </p>
    </footer>
    </div>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1rem 2rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .logo {
      margin: 0 0 1rem;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .nav {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .nav-section {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-label {
      font-size: 0.875rem;
      opacity: 0.8;
      margin-right: 0.5rem;
    }

    .nav a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background 0.2s;
    }

    .nav a:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .nav a.active {
      background: rgba(255, 255, 255, 0.3);
      font-weight: 600;
    }

    .main-content {
      position: relative;
    }

    main {
      min-height: calc(100vh - 250px);
    }

    .footer {
      background: #f5f5f5;
      padding: 2rem;
      text-align: center;
      border-top: 1px solid #ddd;
    }

    .footer code {
      background: #e0e0e0;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-family: monospace;
    }

    .footer .note {
      font-size: 0.875rem;
      color: #666;
      margin-top: 1rem;
    }

    .comparison-table {
      margin: 1.5rem auto;
      border-collapse: collapse;
      font-size: 0.9rem;
    }

    .comparison-table th,
    .comparison-table td {
      padding: 0.5rem 1rem;
      border: 1px solid #ddd;
      text-align: center;
    }

    .comparison-table th {
      background: #e0e0e0;
      font-weight: 600;
    }

    .comparison-table td:first-child {
      text-align: left;
    }

    .comparison-table .yes {
      color: #2e7d32;
      font-weight: 600;
    }

    .comparison-table .no {
      color: #999;
    }

    /* ローディングオーバーレイ（ヘッダー以外を覆う） */
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.9);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 50; /* ヘッダー(100)より下 */
      gap: 1rem;
    }

    .loading-overlay p {
      margin: 0;
      font-size: 1rem;
      color: #666;
    }

    .spinner {
      width: 48px;
      height: 48px;
      border: 4px solid #e0e0e0;
      border-top-color: #667eea;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `,
})
export class App {
  private readonly router = inject(Router);
  protected readonly isNavigating = computed(() => this.router.currentNavigation() !== null);
}
