import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Post } from '../../../../models/post.model';
import { PostService } from '../../../../services/post.service';

@Component({
  selector: 'app-profile-hidden-post-item',
  templateUrl: './profile-hidden-post-item.component.html',
  styleUrls: ['./profile-hidden-post-item.component.scss'],
})
export class ProfileHiddenPostsItemComponent implements OnInit {
  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private postService: PostService
  ) {}

  @Input() post: Post = {};

  ngOnInit(): void {}

  public unHide() {
    if (this.post.id)
      this.postService.unHide(this.post.id).subscribe((message) => {
        this.snackBar.open(`${message}`, 'Close', {
          duration: 4000,
        });
      });
  }
}
