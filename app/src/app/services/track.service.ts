import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Track } from '../models/track.model';

@Injectable({
  providedIn: 'root'
})

export class TrackService {
  url = 'http://localhost:3000/api/search';

  constructor(private http: HttpClient) { }

  searchMovies(title: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.url}/${encodeURI(title)}`).pipe(
      map((results: any) => results['tracks']['items'])
    );
  }

}