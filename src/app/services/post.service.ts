import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Post } from '@app/models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  readonly BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  fetchPosts(filter: string = ''): Observable<Post[]> {
    let params = new HttpParams();
    filter && (params = params.append('title', filter));

    return this.http.get<Post[]>(this.BASE_URL, { params });
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_URL}/${id}`);
  }

  createPost(title: string, body: string): Observable<Post> {
    return this.http.post<Post>(this.BASE_URL, { title, body });
  }
}
