import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/models/userprofile.model';
import { CommunicatorService } from '../services/communicator.service';

@Component({
  selector: 'app-edituserprofile',
  templateUrl: './edituserprofile.component.html',
  styleUrls: ['./edituserprofile.component.css']
})
export class EdituserprofileComponent implements OnInit {
  user: UserProfile;
  constructor(private com:CommunicatorService) { }

  ngOnInit() {
    this.user = new UserProfile();
    this.user = this.getUser();
  }
  clickedSave() {
    this.com.putUser(this.user).subscribe(res => {
      console.log("result is  " + res);
    });
  }
  getUser() {
    this.com.getUser(this.user.userId).subscribe((user: UserProfile) => {
      this.user = user;
      console.log("result is " + this.user.fullName);
    });
    return this.user;
  }
}
