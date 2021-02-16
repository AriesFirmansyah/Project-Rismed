import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any;
  rowspan = 1;
  rowspanstat = true;

  likes = "./../assets/images/likes.png"
  profile = "./../assets/images/user.png"
  comments = "./../assets/images/comments.png"

  constructor(private dataPost:DataService) { }

  ngOnInit(): void {
    this.GetDataPost();
  }
  GetDataPost() {
    this.dataPost.GetPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts.data);
    })
  }
}
