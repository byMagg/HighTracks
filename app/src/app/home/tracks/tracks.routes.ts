import { Routes } from '@angular/router';

import { MoviesPage } from './tracks.page';

export const routes: Routes = [
  {
    path: '',
    component: MoviesPage
  },
  {
    path: ':id',
    loadComponent: () => import('./track/track.page').then(m => m.MoviePage)
  }
];