import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Track } from 'src/app/models/track.model';
import { AuthService } from 'src/app/services/auth.service';
import { TracksApiService } from 'src/app/services/tracks.api.service';

export enum SearchFilter {
  name = "name",
  artist = "artist",
  date = "date"
}

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.page.html',
  styleUrls: ['./tracks.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class TracksPage implements OnInit {

  query: string | undefined;
  tracks: Track[] | undefined;
  track: string | undefined;

  toggleInsert: boolean = false;
  displayInsert: boolean = AuthService.logged;
  filter: SearchFilter = SearchFilter.name;

  searchFilters = Object.values(SearchFilter);

  constructor(public apiService: TracksApiService, public route: ActivatedRoute, public authService: AuthService, private router: Router) {
    this.route.queryParams.subscribe(params => {
      console.log(this.displayInsert)
      console.log(AuthService.logged)
      this.query = params['s'];
      if (Object.values(SearchFilter).includes(params['f'])) {
        this.filter = params['f']
      }
      this.search();
    })
  }

  changeParams() {
    let params = {
      s: this.query,
      f: this.filter
    }
    if (this.query == "") params['s'] = undefined;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge'
    });
  }

  navigateToTrack(trackId: string) {
    this.router.navigate([`/tracks/${trackId}`]);
  }

  toggleInsertTrack() {
    this.toggleInsert = !this.toggleInsert;
    this.search()
  }

  search() {
    console.log(this.query)
    this.changeParams();
    if (this.query) {
      if (this.toggleInsert) {
        this.searchSpotify(this.query);
      } else {
        this.searchDB(this.query);
      }
    } else {
      this.getAllTracks();
    }
  }

  searchSpotify(query: string) {
    this.apiService.searchTracksSpotify(query).subscribe(tracks => {
      this.tracks = tracks;
      console.log(this.tracks[0])
    });
  }

  searchDB(query: string) {
    console.log("searchDB: " + query + " " + this.filter)
    this.apiService.searchTracks(query, this.filter).subscribe(tracks => {
      this.tracks = tracks;
      console.log(this.tracks[0])
    });
  }

  getAllTracks() {
    this.apiService.getTracks().subscribe(tracks => {
      this.tracks = tracks;
      console.log(this.tracks[0])
    });
  }

  insertTrack(track: Track) {
    this.apiService.insertTrack(track);
  }

  ngOnInit() {

  }
}