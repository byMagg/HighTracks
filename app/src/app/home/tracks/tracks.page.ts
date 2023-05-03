import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Track } from 'src/app/models/track.model';
import { AuthService } from 'src/app/services/auth.service';
import { TracksApiService } from 'src/app/services/tracks.api.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.page.html',
  styleUrls: ['./tracks.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ]
})
export class TracksPage implements OnInit {

  query: string = '';
  tracks: Track[] | undefined;
  track: string | undefined

  toggleInsert: boolean = false;

  constructor(public apiService: TracksApiService, public route: ActivatedRoute, public authService: AuthService) {
    this.route.queryParams.subscribe(params => {
      this.query = params['s'];
      this.search();
    })
  }

  toggleInsertTrack() {
    this.toggleInsert = !this.toggleInsert;
    if (this.toggleInsert) {
      this.searchSpotify();
    } else {
      this.search();
    }
  }

  searchSpotify() {
    this.apiService.searchTracksSpotify(this.query).subscribe(tracks => {
      this.tracks = tracks;
      console.log(this.tracks[0])
    });
  }

  search() {
    this.apiService.searchTracks(this.query).subscribe(tracks => {
      this.tracks = tracks;
      console.log(this.tracks[0])
    });
  }

  insertTrack(track: Track) {
    this.apiService.insertTrack(track);
  }

  // checkTrack(trackId: string) {
  //   return this.apiService.checkTrack(trackId);
  // }

  ngOnInit() {

  }

}
