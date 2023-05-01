import { Routes } from '@angular/router';
import { HomePage } from './home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'tracks',
    loadChildren: () => import('./insert-tracks/insert.tracks.routes').then(m => m.routes)
  }
];