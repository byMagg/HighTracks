import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonAlert, IonModal, IonicModule } from '@ionic/angular';
import { Track } from 'src/app/models/track.model';
import { AuthService } from 'src/app/services/auth.service';
import { TracksApiService } from 'src/app/services/tracks.api.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { Album } from 'src/app/models/album.model';

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
  displayInsert: boolean = false;
  filter: SearchFilter = SearchFilter.name;

  searchFilters = Object.values(SearchFilter);

  trackToAdd: Track = new Track("", new Album("", "", ""));

  @ViewChild(IonModal) modal: IonModal | undefined;
  @ViewChild(IonAlert) alert: IonAlert | undefined;

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'OK',
      role: 'confirm',
    },
  ];

  toBeDeletedTrackId: string | undefined;

  constructor(public apiService: TracksApiService, public route: ActivatedRoute, public authService: AuthService, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.displayInsert = this.authService.checkLogged();
      console.log("DisplayInsert: " + this.displayInsert)
      console.log("ToggleInsert: " + this.toggleInsert)
      console.log("Logged: " + AuthService.logged)
      this.query = params['s'];
      if (this.searchFilters.includes(params['f'])) {
        this.filter = params['f']
      }
      this.search();
    })
  }

  setResult(ev: any) {
    console.log(ev.detail.role);
    if (ev.detail.role == "confirm") {
      console.log(this.toBeDeletedTrackId);
      if (this.toBeDeletedTrackId) this.deleteTrack(this.toBeDeletedTrackId);
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          s: this.query,
          f: this.filter
        },
        queryParamsHandling: 'merge'
      });
    }
  }

  cancel() {
    if (this.modal) this.modal.dismiss(null, 'cancel');
  }

  confirm(track: Track) {
    if (this.modal) this.modal.dismiss(track, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<Track>>;
    console.log('Will dismiss with: ', ev.detail);
    if (ev.detail.role === 'confirm') {
      if (ev.detail.data) {
        ev.detail.data._id = ev.detail.data?.name;
        this.insertTrack(ev.detail.data);
      }
    }
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
      this.tracks = this.checkInserted(tracks);
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

  checkInserted(query: Track[]): Track[] {
    this.apiService.getTracks().subscribe(tracks => {
      for (let track of query) {
        tracks.find(t => t._id == track._id) ? track.inserted = true : track.inserted = false;
      }
      return query;
    });
    return query;
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

  deleteTrack(trackId: string) {
    console.log("deleteTrack: " + trackId)
    this.apiService.deleteTrack(trackId);
  }

  ngOnInit() {

  }
}