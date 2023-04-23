import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Track } from 'src/app/models/track.model';
import { MovieService } from 'src/app/services/movie.service';

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
export class MoviesPage implements OnInit {

  searchTerm: string = '';
  tracks: Track[] | undefined;
  movie: string | undefined

  constructor(public movieService: MovieService, public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['s'];
      this.searchChanged()
    })
  }

  searchChanged() {
    this.movieService.searchMovies(this.searchTerm).subscribe(tracks => {
      console.log(tracks[0]);
      this.tracks = tracks;
    })
  }

  ngOnInit() {

  }

}
