import { Routes } from '@angular/router';

import { TracksPage } from './tracks.page';

export const routes: Routes = [
  {
    path: '',
    component: TracksPage
  },
  {
    path: ':id',
    loadComponent: () => import('./track/track.page').then(m => m.TrackPage)
  }
];