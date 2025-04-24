import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostDto, PostResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class PostControllerService {
  private baseUrl = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) {}

  getAllPosts(page: number = 0, size: number = 5): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.baseUrl}?pageNo=${page}&pageSize=${size}`);
  }

  getPost(id: number): Observable<PostDto> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPost(post: any): Observable<PostDto> {
    return this.http.post(this.baseUrl, post);
  }

  updatePost(id: number, post: any): Observable<PostDto> {
    return this.http.put(`${this.baseUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}