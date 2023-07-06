import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post-model';
import { CreatePostPayload } from '../post/create-post/create-post.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
   console.log('Método getAllPosts dentro de post.service.ts chamado');
   return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts');
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    console.log('Método createPost dentro de post.service.ts chamado');
    return this.http.post('http://localhost:8080/api/posts', postPayload);
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>('http://localhost:8080/api/posts/' + id);
  }

  getAllPostsByUser(name: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('http://localhost:8080/api/posts/by-user/' + name);
  }
}