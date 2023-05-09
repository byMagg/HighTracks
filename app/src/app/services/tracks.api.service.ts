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

  async searchTracksSpotify(title: string): Promise<Track[]> {
    try {
      const tracks: Track[] = (await lastValueFrom(this.http.get<any>(`${this.url}search/${encodeURI(title)}`)))['tracks']['items']
      console.log(tracks)
      return tracks.map((track: any) => {
        return {
          _id: track.id,
          ...track,
          id: undefined
        };
      });
    } catch (error: unknown) {
      console.log(error);
      return [];
    }
  }

  async searchTracks(title: string, _field: SearchFilter = SearchFilter.name): Promise<Track[]> {
    try {
      return await lastValueFrom(this.http.get<Track[]>(`${this.url}tracks/search?${_field}=${encodeURI(title)}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }));
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 404) throw new Error("Track not found");
        if (error.status === 500) throw new Error("Error getting track")
        if (error.status === 0) throw new Error("Error connecting to server")
      }
      throw error;
    }
  }

  async getTrack(trackId: string): Promise<Track> {
    try {
      return await lastValueFrom(this.http.get<Track>(`${this.url}tracks/${trackId}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }));
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 404) throw new Error("Track not found");
        if (error.status === 500) throw new Error("Error getting track")
        if (error.status === 0) throw new Error("Error connecting to server")
      }
      throw error;
    }
  }

  async getTracks(): Promise<Track[]> {
    try {
      return await lastValueFrom(this.http.get<Track[]>(`${this.url}tracks/`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }));
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 500) throw new Error("Error getting track")
        if (error.status === 0) throw new Error("Error connecting to server")
      }
    }
    return [];
  }

  async insertTrack(track: Track): Promise<boolean> {
    const coords: Coords = await this.geoService.getLocation();
    track.location = coords;
    try {
      await lastValueFrom(this.http.post<Track>(`${this.url}tracks/`, track, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }));
      return true;
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 400) throw Error("Track already exists");
      }
      return false;
    }
  }

  async insertComment(trackId: string, comment: Comment): Promise<boolean> {
    const coords: Coords = await this.geoService.getLocation();
    comment.location = coords;
    console.log(comment);
    try {
      await lastValueFrom(this.http.post<Comment>(`${this.url}tracks/${trackId}/comments`, comment, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }));
      return true;
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 404) {
          console.log("Track not found");
        }
      }
      return false;
    }
  }

  async updateTrack(track: Track): Promise<boolean> {
    try {
      await lastValueFrom(this.http.put<Track>(`${this.url}tracks/${track._id}`, track, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }));
      return true;
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 404) console.log("Track not found");
        if (error.status === 500) console.log("Error updating track")
      }
      return false;
    }
  }

  async deleteTrack(trackId: string): Promise<boolean> {
    try {
      await lastValueFrom(this.http.delete<Track>(`${this.url}tracks/${trackId}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }));
      return true;
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 404) console.log("Track not found");
        if (error.status === 500) console.log("Error deleting track")
      }
      return false;
    }
  }

  async getComments(trackId: string): Promise<Comment[]> {
    let comments: Comment[] = [];
    try {
      comments = await lastValueFrom(this.http.get<Comment[]>(`${this.url}tracks/${trackId}/comments`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }));
      console.log(comments)
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 404) console.log("Track not found");
        if (error.status === 500) console.log("Error getting comments")
      }
    }
    return comments
  }

}

