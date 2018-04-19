import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from "../post.interface";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => this.posts = data);
  }

}
