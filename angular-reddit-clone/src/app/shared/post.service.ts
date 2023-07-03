import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from './post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
   console.log('teste de post método getAllPosts dentro de post.service.ts');
   return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts');
    // return this.http.get<Array<PostModel>>('/api/posts');
  }
}