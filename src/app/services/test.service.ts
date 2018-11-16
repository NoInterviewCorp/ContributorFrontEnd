import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Technology } from 'src/app/technology.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  static tech : Technology;

  setTechName(t:Technology) {
    
    TestService.tech=t;
  }
  getTechName() {
    return TestService.tech;
  }
 
  getQuestions() {
    // console.log("No of Questions are : "+TestService.tech.Questions );
    console.log((TestService.tech==null?"NACHO NULL HUA":TestService.tech.Questions));
    return TestService.tech.Questions;
  }

 
}
