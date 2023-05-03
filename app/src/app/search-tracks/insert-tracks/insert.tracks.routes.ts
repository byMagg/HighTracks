import { Routes } from '@angular/router';

import { InsertTracksPage } from './insert.tracks.page';

export const routes: Routes = [
  {
    path: '',
    component: InsertTracksPage
  },
  {
    path: ':id',
    loadComponent: () => import('./track/track.page').then(m => m.TrackPage)
  }
];