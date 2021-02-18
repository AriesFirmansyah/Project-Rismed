import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  dataComments: any;
  commentStatus =  false;

  constructor(
    private Comments: DataService,
    @Inject(MAT_DIALOG_DATA) public idPost: any
  ) { }

  ngOnInit(): void {
    this.GetDataComments();
  }
  GetDataComments() {
    this.Comments.GetComments(this.idPost.id).subscribe((comments) => {
      this.dataComments = comments;
      console.log(this.dataComments.data);
      if(this.dataComments.data.length != 0) this.commentStatus = true;
    })
  }

}
