import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then((m) => m.routes),
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.routes').then((m) => m.routes),
  },

];
