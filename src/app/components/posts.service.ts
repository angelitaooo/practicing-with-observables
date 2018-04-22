import { Injectable } from '@angular/core';
import { Post, Comments } from './post.interface';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

const POST_API: string = "http://localhost:3000/posts/";

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  getPosts(): any {
    return this.http.get(POST_API)
    .map((response) => response.json());
  }

  getPost(postId):any {
    return this.http.get(`${POST_API}${postId}`)
    .map(response => response.json());
  }

  getComments(postId):any {
     return this.http.get(`${POST_API}${postId}/comments`)
     .map(response => response.json());
  }   
  
  getPostWithComments(postId): any {
    return Observable
    .forkJoin(
      this.getPost(postId),
      this.getComments(postId)
    )
    .map(res => res)
  }
}
