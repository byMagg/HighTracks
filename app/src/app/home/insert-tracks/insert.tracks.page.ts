import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Track } from 'src/app/models/track.model';
import { TracksApiService } from 'src/app/services/tracks.api.service';

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

  constructor(public apiService: TracksApiService, public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['s'];
      this.searchChanged()
    })
  }

  searchChanged() {
    this.apiService.searchTracksSpotify(this.searchTerm).subscribe(tracks => {
      console.log(tracks[0]);
      this.tracks = tracks;
    })
  }

  ngOnInit() {

  }

}
