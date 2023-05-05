import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TracksApiService } from 'src/app/services/tracks.api.service';
import { Comment } from 'src/app/models/track.model';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  standalone: true,
  imports: [IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class CommentsComponent implements OnInit {

  @Input() trackId: string | undefined;
  author: string | undefined;
  text: string | undefined;
  score: number = 0;
  comments: Comment[] | undefined;


  constructor(private apiService: TracksApiService, private router: Router) { }

  ngOnInit() {
    this.getComments();
  }

  sendComment() {
    if (this.trackId && this.author && this.text && this.score) {

      let comment: Comment = {
        author: this.author,
        text: this.text,
        score: this.score
      }
      this.apiService.insertComment(this.trackId, comment).subscribe(() => {
        this.getComments();
      });
      this.author = undefined;
      this.text = undefined;
      this.score = 0;
    }
  }

  getComments() {
    if (this.trackId) {
      this.apiService.getComments(this.trackId).subscribe(comments => {
        this.comments = comments;
      });
    }
  }
}
