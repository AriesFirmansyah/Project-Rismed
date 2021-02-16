import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { Observable, of, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private linkPost = 'https://dummyapi.io/data/api/post';
  private linkUser = 'https://dummyapi.io/data/api/user';
  private linkTag = 'https://dummyapi.io/data/api/tag';
  private linkPost1 = 'https://jsonplaceholder.typicode.com/posts'

  key = {
    headers: new HttpHeaders ({
      'app-id': '5fcf34885aa4d03b6d8505af',
    }),
  }
  constructor(private http: HttpClient) { }

  GetPosts() {
    return this.http.get(this.linkPost, this.key);
  }
  GetUsers() {
    return this.http.get(this.linkUser, this.key);
  }
  GetTags(id: string) {
    return this.http.get(this.linkTag + `/${id}/post`, this.key);
  }
  GetProfile(id: string) {
    return this.http.get(this.linkUser + `/${id}`, this.key);
  }
  GetComments(id: string){
    return this.http.get(this.linkPost + `/${id}/comment`, this.key);
  }
}
