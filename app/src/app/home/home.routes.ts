import { Routes } from '@angular/router';
import { HomePage } from './home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'movies',
    loadComponent: () => import('./movies/movies.page').then(m => m.MoviesPage)
  }
];