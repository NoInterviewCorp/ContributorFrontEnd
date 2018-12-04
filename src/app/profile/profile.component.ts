import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/models/userprofile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:UserProfile;
  constructor() { }

  ngOnInit() {
  }

}
