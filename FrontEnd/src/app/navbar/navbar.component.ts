import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  @Output() onSignIn = new EventEmitter();
  hasSignedIn:boolean = false;
  navbarOpen = false;
  constructor(private socialAuthService: AuthService, public dialog: MatDialog, private router: Router) { }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  openDialog(isSignIn) {
    let dialogRef = this.dialog.open(SignInComponent, { panelClass: 'custom-dialog-container', data: { isSignIn: isSignIn } });
    dialogRef.afterClosed().subscribe(result => {
      this.signIn();
    });
  }
  signIn() {
    this.hasSignedIn = true;
    this.onSignIn.emit(this.hasSignedIn);
    this.router.navigate(['profile']);
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
}
