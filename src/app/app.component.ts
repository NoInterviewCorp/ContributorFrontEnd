import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SignInComponent } from '../app/sign-in/sign-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = [1, 2, 3, 4]
  title = 'PotentiOMeter';
}
