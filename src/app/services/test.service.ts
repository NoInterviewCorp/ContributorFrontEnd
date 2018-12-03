import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Technology } from 'src/app/technology.model';
import * as signalR from '@aspnet/signalr';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  connection: any;
  static tech: Technology;

  setTechName(t: Technology) {
    TestService.tech = t;
  }
  getTechName() {
    return TestService.tech;
  }

  getQuestions(username:string, techname:string, concepts:any) {
    // console.log("No of Questions are : "+TestService.tech.Questions );
    // console.log((TestService.tech == null ? "NACHO NULL HUA" : TestService.tech.Questions));

    this.connection.send('getQuestionsBatch', username, techname,concepts);
  }

  connectionBuilder() {
    this.connection = new signalR.HubConnectionBuilder()
    .withUrl('http://localhost:5000/test') 
    .build();
    this.connection.start().then(() => console.log('connection established')).catch((err) => console.log('Error::: ', err));
  }

  getConcepts(username:string,techname:string) {
    this.connection.send('newMessage', username, techname);
  }

  getTechnologies() {
    return this.http.get('http://localhost:3000/Technology');
  }

  }
