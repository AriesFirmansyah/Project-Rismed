import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CommentsComponent } from '../comments/comments.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  dataUser: any;
  userPost: any;

  likes = "./../assets/images/likes.png"
  profile = "./../assets/images/user.png"
  comments = "./../assets/images/comments.png"

  dataID = './../assets/images/id.png'
  gender = './../assets/images/gender.png'
  birthDate = './../assets/images/birthdate.png'
  registerDate = './../assets/images/register.png'
  email = './../assets/images/email.png'
  telp = './../assets/images/phone.png'

  constructor(
    private dataProfile:DataService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const userid: any = this.route.snapshot.paramMap.get('userid');
    this.GetUserProfile(userid);
    this.GetUserPost(userid);
  }
  GetUserProfile(userid: any) {
    this.dataProfile.GetProfile(userid).subscribe( (data) => {
      this.dataUser = data;
      console.log(this.dataUser);
    })
  }
  GetUserPost(userid: any) {
    this.dataProfile.GetUserPosts(userid).subscribe( (data) => {
      this.userPost = data;
      console.log(this.userPost.data)
    })
  }
  openComments(key: string) {
    this.dialog.open(CommentsComponent, {data: {id: key}});
    console.log(key);
  }

}
