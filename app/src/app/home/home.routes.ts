import { Routes } from '@angular/router';
import { HomePage } from './home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.routes').then(m => m.routes)
  }
];