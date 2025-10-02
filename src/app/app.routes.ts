import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((c) => c.HomePage),
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./sobre/sobre.page').then((c) => c.SobrePage)
  },
  {
    path: 'api',
    loadComponent: () => import('./api/api.page').then( m => m.ApiPage)
  },

];
