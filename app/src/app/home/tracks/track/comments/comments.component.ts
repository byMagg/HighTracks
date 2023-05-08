import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TracksApiService } from 'src/app/services/tracks.api.service';
import { Comment } from 'src/app/models/comment.model';

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

  async sendComment() {
    if (this.trackId && this.author && this.text && this.score) {

      let comment: Comment = {
        author: this.author,
        text: this.text,
        score: this.score
      }
      const response = await this.apiService.insertComment(this.trackId, comment);
      if (response) {
        this.getComments();
        this.author = undefined;
        this.text = undefined;
        this.score = 0;
      }
    }
  }

  async getComments() {
    if (!this.trackId) return;
    this.comments = await this.apiService.getComments(this.trackId);
  }
}
