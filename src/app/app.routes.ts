import { Routes } from '@angular/router';

// ローディングインジケーターのデモ用に遅延を追加する resolver
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home').then((m) => m.HomePage),
    title: 'Home - Navigation API Demo',
    resolve: {
      delay: () => delay(3000),
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about').then((m) => m.AboutPage),
    title: 'About - Navigation API Demo',
    resolve: {
      delay: () => delay(3000),
    },
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact').then((m) => m.ContactPage),
    title: 'Contact - Navigation API Demo',
    resolve: {
      delay: () => delay(3000),
    },
  },
];
