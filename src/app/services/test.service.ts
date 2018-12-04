import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Technology } from 'src/app/technology.model';
import * as signalR from '@aspnet/signalr';
import { LearningPlan } from 'src/models/learningplan.model';
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

  connectionBuilder(username:string) {
    this.connection = new signalR.HubConnectionBuilder()
    .withUrl('http://172.23.238.173:5001/test?=username='+username) 
    .build();
  
    return this.connection.start()
      .then(() => console.log('connection established'))
      .catch((err) => console.log('Error::: ', err));
  }

  getConcepts(username:string, techname:string) {
    this.connection.send('RequestConcepts', 'username', techname);
  }

  getTechnologies() {
    return this.http.get('http://172.23.238.173:5002/Technology');
  }

  //  4.12.
  //call this when user clicks on next
  evaluateSelectedOption(username:string, quesId:string, optionId:string) {
    this.connection.send('EvaluateAnswer',username,quesId,optionId);
  }

  }
