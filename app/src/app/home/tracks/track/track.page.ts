import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TracksApiService } from 'src/app/services/tracks.api.service';

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

  trackId: String | undefined;

  constructor(public apiService: TracksApiService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.trackId = params['id'];
      console.log(this.trackId);
    })
  }

  ngOnInit() {
  }

}
