import { Injectable } from '@angular/core';
import { Post } from './post.interface';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

const POST_API: string = "https://jsonplaceholder.typicode.com/posts/";

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
}
