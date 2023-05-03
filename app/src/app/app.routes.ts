import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./search-tracks/search.tracks.routes').then((m) => m.routes),
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
