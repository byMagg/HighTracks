import { Routes } from '@angular/router';

import { MoviesPage } from './movies.page';

export const routes: Routes = [
  {
    path: '',
    component: MoviesPage
  },
  {
    path: ':id',
    loadComponent: () => import('./movie/movie.page').then(m => m.MoviePage)
  }
];