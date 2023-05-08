import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, lastValueFrom, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Track } from '../models/track.model';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { SearchFilter } from '../home/tracks/tracks.page';
import { GeolocationService } from './geolocation.service';
import { Coords } from '../models/coords.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class TracksApiService {

  url = environment.url;
  token = this.authService.getJWT();

  constructor(private http: HttpClient, private authService: AuthService, private geoService: GeolocationService) { }

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

  searchTracks(title: string, _field: SearchFilter = SearchFilter.name): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.url}tracks/search?${_field}=${encodeURI(title)}`, {
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

  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.url}tracks/`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      map((results: Track[]) => results)
    );
  }

  async insertTrack(track: Track) {
    const coords: Coords = await this.geoService.getLocation();
    track.location = coords;
    this.http.post<Track>(`${this.url}tracks/`, track, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        return of(error.error);
      })
    ).subscribe(res => {
      return res;
    });
  }

  insertComment(trackId: string, comment: Comment): Observable<Comment> {
    this.http.post<Comment>(`${this.url}tracks/${trackId}/comments`, comment, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        return of(error.error);
      })
    ).subscribe(res => {
      return res;
    });
    return of(comment);
  }

  async updateTrack(track: Track): Promise<boolean> {
    const response = await lastValueFrom(this.http.put<Track>(`${this.url}tracks/${track._id}`, track, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }));
    if (response) {
      return true;
    }
    return false;
  }

  async deleteTrack(trackId: string): Promise<boolean> {
    const response = await lastValueFrom(this.http.delete<Track>(`${this.url}tracks/${trackId}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }));
    if (response) {
      return true;
    }
    return false;
  }

  getComments(trackId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}tracks/${trackId}/comments`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      map((results: Comment[]) => results)
    );
  }
}

