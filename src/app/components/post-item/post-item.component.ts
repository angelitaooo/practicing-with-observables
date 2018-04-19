import { Component, OnInit } from '@angular/core';
import { PostsService } from "../posts.service";
import { Post } from "../post.interface";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.css"]
})
export class PostItemComponent implements OnInit {
post: Post;
  constructor(private activatedRoute: ActivatedRoute, private postService: PostsService) {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.postService.getPost(id).subscribe( data => this.post = data);
    });

  }

  ngOnInit() {}
}
