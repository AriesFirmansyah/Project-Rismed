import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  constructor(private dataPost:DataService) { }
  likes = "./../assets/images/likes.png"
  profile = "./../assets/images/user.png"
  comments = "./../assets/images/comments.png"
  ngOnInit(): void {
    this.GetDataUserList();
  }
  GetDataUserList() {
    this.dataPost.GetUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users.data);
    })
  }

}
