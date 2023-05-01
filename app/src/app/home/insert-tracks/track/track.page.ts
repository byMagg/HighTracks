import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonicModule,]
})
export class TrackPage implements OnInit {

  movieId = "";

  constructor(public trackService: TrackService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      console.log(this.movieId);
    })
  }

  ngOnInit() {
  }

}
