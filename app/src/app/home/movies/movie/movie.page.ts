import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/models/MovieDetails';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
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
