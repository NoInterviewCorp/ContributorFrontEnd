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
    this.connection.on('ReceivedRequest', () => console.log("ReceivedMessagesFromServer"));
    this.connection.send('GetQuestionsBatch', username, techname, concepts);
  }

  connectionBuilder(username:string) {
    console.log(username);
    this.connection = new signalR.HubConnectionBuilder()
    .withUrl('http://172.23.238.173:5001/test?username=4321') 
    .build();
  
    return this.connection.start();
  }

  // getConcepts(username:string, techname:string) {
  //   this.connection.send('RequestConcepts', 'username', techname);
  // }

  getConcepts() {
    return this.http.get('http://172.23.238.173:5002/Concept/java');
  }

  getTechnologies() {
    return this.http.get('http://172.23.238.173:5002/Technology');
  }

  //  4.12.
  //call this when user clicks on next
  evaluateSelectedOption(username:string, quesId:string, optionId:number) {
    this.connection.send('EvaluateAnswer',username,quesId,optionId);
  }

  }
