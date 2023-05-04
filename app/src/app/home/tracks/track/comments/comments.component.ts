import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
  score: number | undefined;
  comments: Comment[] | undefined;


  constructor(private apiService: TracksApiService) { }

  ngOnInit() {
    this.getComments();
  }

  sendComment() {
    if (this.trackId && this.author && this.text && this.score) {
      const comment: Comment = {
        author: this.author,
        text: this.text,
        score: this.score
      };
      console.log(comment)
      this.apiService.insertComment(this.trackId, comment);
      // this.comment = undefined;
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
