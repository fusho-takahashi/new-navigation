import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { MockApiService } from './services/mock-api.service';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home').then((m) => m.HomePage),
    title: 'Home - Navigation API Demo',
    resolve: {
      // MockApiService でアイテム一覧を取得
      items: () => inject(MockApiService).getItems(),
    },
  },
  {
    path: 'item/:id',
    loadComponent: () => import('./pages/item-detail').then((m) => m.ItemDetailPage),
    title: 'Item Detail - Navigation API Demo',
    resolve: {
      // MockApiService で単一アイテムを取得
      item: (route: ActivatedRouteSnapshot) =>
        inject(MockApiService).getItem(Number(route.params['id'])),
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about').then((m) => m.AboutPage),
    title: 'About - Navigation API Demo',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact').then((m) => m.ContactPage),
    title: 'Contact - Navigation API Demo',
  },
];
