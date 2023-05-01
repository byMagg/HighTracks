import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Track } from 'src/app/models/track.model';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './insert.tracks.page.html',
  styleUrls: ['./insert.tracks.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ]
})
export class InsertTracksPage implements OnInit {

  searchTerm: string = '';
  tracks: Track[] | undefined;
  movie: string | undefined

  constructor(public trackService: TrackService, public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['s'];
      this.searchChanged()
    })
  }

  searchChanged() {
    this.trackService.searchTracksSpotify(this.searchTerm).subscribe(tracks => {
      console.log(tracks[0]);
      this.tracks = tracks;
    })
  }

  ngOnInit() {

  }

}
