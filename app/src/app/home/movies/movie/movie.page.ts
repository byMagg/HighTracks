import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MovieDetails } from 'src/app/models/movie-details.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonicModule,]
})
export class MoviePage implements OnInit {

  movieId = "";
  details: MovieDetails | undefined;


  constructor(public movieService: MovieService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      console.log(this.movieId);
      this.fetchDetails(this.movieId)
    })

  }

  fetchDetails(movieId: string) {
    return this.movieService.searchMovieDetails(movieId).subscribe((movie: MovieDetails) => {
      this.details = movie;
    })
  }

  ngOnInit() {
  }

}
