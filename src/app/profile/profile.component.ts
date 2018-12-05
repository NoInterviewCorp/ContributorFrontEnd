import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/models/userprofile.model';
import { CommunicatorService } from '../services/communicator.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserProfile;
  constructor(private com: CommunicatorService) {
    this.user = new UserProfile();
  }

  ngOnInit() {
    console.log(this.user.fullName);
    // this.getUser();
    this.user = this.getUser();
    // console.log(this.user);
  }

  getUser() {
    this.com.getUser(this.user.userId).subscribe((user: UserProfile) => {
      this.user = user;
      console.log("result is " + this.user.fullName);
    });
    return this.user;
  }

}
