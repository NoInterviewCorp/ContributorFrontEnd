import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private router: Router) {

  }

  canActivate() {
    if (!this.isTokenExpired()) {
      return true;
    }
    else {
      // this.router.navigate(['learner']);
      window.location.href = "http://172.23.238.173:80/";
      return false;
    }


  }

  getTokenExpiryDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;

  }

  isTokenExpired(): boolean {
    let token: string;

    if (!token) token = localStorage.getItem("TOKEN");
    if (!token) return true;
    const date = this.getTokenExpiryDate(token);
    if (date === undefined || date === null) return false;
    return !(date.valueOf() > new Date().valueOf());
  }


}