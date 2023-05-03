import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Track } from '../models/track.model';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TracksApiService {

  url = environment.url;
  token = this.authService.getJWT();

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  searchTracksSpotify(title: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.url}search/${encodeURI(title)}`).pipe(
      map((results: any) => {
        const tracks = results['tracks']['items'];
        return tracks.map((track: any) => {
          return {
            _id: track.id,
            ...track,
            id: undefined
          };
        });
      })
    );
  }

  searchTracks(title: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.url}tracks/search/${encodeURI(title)}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      map((results: Track[]) => results)
    );
  }

  getTrack(trackId: string): Observable<Track> {
    return this.http.get<Track>(`${this.url}tracks/${trackId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      map((results: Track) => results)
    );

  }

  // checkTrack(trackId: string): boolean {
  //   this.http.get<Track>(`${this.url}tracks/${trackId}`).subscribe(res => {
  //     console.log(res);
  //     return true;
  //   });
  //   return false;
  // }

  insertTrack(track: Track) {
    this.http.post<Track>(`${this.url}tracks/`, track, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        return of(error.error);
      })
    ).subscribe(res => {
      console.log(res);
    });
  }
}
