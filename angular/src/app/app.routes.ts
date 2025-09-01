import { authGuard, permissionGuard } from '@abp/ng.core';
import { Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.createRoutes()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.createRoutes()),
  },
  {
    path: 'tenant-management',
    loadChildren: () => import('@abp/ng.tenant-management').then(m => m.createRoutes()),
  },
  {
    path: 'setting-management',
    loadChildren: () => import('@abp/ng.setting-management').then(m => m.createRoutes()),
  },
  {
    path: 'books',
    loadComponent: () => import('./book/book.component').then(m => m.BookComponent),
    canActivate: [authGuard, permissionGuard],
  },
  {
    path: 'authors',
    loadComponent: () => import('./author/author.component').then(m => m.AuthorComponent),
    canActivate: [authGuard, permissionGuard],
  },
];
