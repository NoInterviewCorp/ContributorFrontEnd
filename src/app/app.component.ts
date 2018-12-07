import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SignInComponent } from '../app/sign-in/sign-in.component';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = [1, 2, 3, 4]
  title = 'PotentiOMeter';
  constructor(private cookieService: CookieService) { }
  logout() {
    localStorage.removeItem("TOKEN");
    this.cookieService.delete("TOKEN");
    window.location.href = "http://172.23.238.173:80/";
  }
}
