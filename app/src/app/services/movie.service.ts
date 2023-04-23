import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDetails } from '../models/movie-details.model';
import { Track } from '../models/track.model';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  url = 'http://localhost:3000/api/search';

  constructor(private http: HttpClient) { }

  searchMovies(title: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.url}/${encodeURI(title)}`).pipe(
      map((results: any) => results['tracks']['items'])
    );
  }

  // searchMovieDetails(id: string): Observable<MovieDetails> {
  //   return this.http.get<MovieDetails>(`${this.url}?i=${encodeURI(id)}&apikey=${this.apiKey}`);
  // }

}