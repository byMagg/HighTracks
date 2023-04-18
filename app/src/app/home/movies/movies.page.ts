import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  searchTerm: string = '';
  movies: Movie[] | undefined;
  movie: string | undefined

  constructor(public movieService: MovieService, public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['s'];
      this.searchChanged()
    })
  }

  searchChanged() {
    this.movieService.searchMovies(this.searchTerm).subscribe(movies => {
      this.movies = movies;
    })
  }

  ngOnInit() {

  }

}
