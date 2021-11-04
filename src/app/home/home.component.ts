import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from '../comments/comments.component';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any;

  likes = "./../assets/images/likes.png"
  profile = "./../assets/images/user.png"
  comments = "./../assets/images/comments.png"

  constructor(
    private dataPost:DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.GetDataPost();
  }
  GetDataPost() {
    this.dataPost.GetPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts.data);
    })
  }

  openComments(key: string) {
    this.dialog.open(CommentsComponent, {data: {id: key}});
  }
}
