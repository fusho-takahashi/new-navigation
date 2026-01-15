import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withExperimentalPlatformNavigation } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // withExperimentalPlatformNavigation() を使用してブラウザの Navigation API と統合
    // これにより、RouterLink なしの <a> タグでも SPA ナビゲーションとして動作する
    provideRouter(routes, withExperimentalPlatformNavigation()),
  ],
};
