import { Component, OnInit, Input, Inject } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { MAT_DIALOG_DATA } from '@angular/material';
export interface DialogData {
  isSignIn: boolean;
}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  selectedIndex = 0;
  constructor(private socialAuthService: AuthService, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.selectedIndex = (data.isSignIn) ? 0 : 1;
  }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData
        // ...       
      }
    );
  }
  ngOnInit() {
  }

}
