import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes').then((m) => m.routes),
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.routes').then((m) => m.routes),
  },
];
