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
      'app-id': '5fce2709d9c8d31fbf260a65',
    }),
  }
  constructor(private http: HttpClient) { }

  GetPosts() {
    return this.http.get(this.linkPost, this.key);
  }
  GetUsers() {
    return this.http.get(this.linkUser, this.key);
  }
  GetUserPosts(id: string) {
    return this.http.get(this.linkUser + `/${id}/post`, this.key);
  }
  GetTags(id: string) {
    return this.http.get(this.linkTag + `/${id}/post`, this.key);
    // return this.http.get(this.linkTag, this.key);
  }
  GetProfile(id: string) {
    return this.http.get(this.linkUser + `/${id}`, this.key);
  }
  GetComments(id: string){
    return this.http.get(this.linkPost + `/${id}/comment`, this.key);
  }
}
