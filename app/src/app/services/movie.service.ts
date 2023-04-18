import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDetails } from '../models/MovieDetails';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  url = 'http://www.omdbapi.com/';
  apiKey = '95303372';

  constructor(private http: HttpClient) { }

  searchMovies(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}?s=${encodeURI(title)}&apikey=${this.apiKey}`).pipe(
      map((results: any) => results['Search'])
    );
  }

  searchMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.url}?i=${encodeURI(id)}&apikey=${this.apiKey}`);
  }

}