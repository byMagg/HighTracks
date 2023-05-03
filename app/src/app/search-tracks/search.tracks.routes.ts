import { Routes } from '@angular/router';
import { SearchPage } from './search.tracks.page';

export const routes: Routes = [
  {
    path: '',
    component: SearchPage,
  },
  {
    path: 'tracks',
    loadChildren: () => import('./insert-tracks/insert.tracks.routes').then(m => m.routes)
  }
];