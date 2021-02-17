import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  dataUser: any;


  dataID = './../assets/images/id.png'
  gender = './../assets/images/gender.png'
  birthDate = './../assets/images/birthdate.png'
  registerDate = './../assets/images/register.png'
  email = './../assets/images/email.png'
  telp = './../assets/images/phone.png'

  constructor(
    private dataProfile:DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.GetUserProfile();
  }
  GetUserProfile() {
    const userid: any = this.route.snapshot.paramMap.get('userid');
    this.dataProfile.GetProfile(userid).subscribe( (data) => {
      this.dataUser = data;
      console.log(this.dataUser);
    })
  }

}
