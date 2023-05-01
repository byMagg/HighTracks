import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonicModule,]
})
export class MoviePage implements OnInit {

  movieId = "";

  constructor(public movieService: MovieService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      console.log(this.movieId);
    })
  }

  ngOnInit() {
  }

}
