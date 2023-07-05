import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../post-model';
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {
  
  posts: Array<PostModel> = [];

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faComments = faComments;

  constructor(private postService: PostService){
  this.postService.getAllPosts().subscribe(post => {
    this.posts = post;
  });
}

ngOnInit(): void {
}
}
