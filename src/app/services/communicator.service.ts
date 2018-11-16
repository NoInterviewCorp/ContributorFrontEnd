import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private title:string;
  hasClickedAddResources:boolean;
  constructor(private http: HttpClient) { }
  getTitle(){
    return this.title;
  }
  setTitle(title:string){
   this.title=title;
  }
  getconcepts(){
    return this.http.get('http://localhost:3000/Concept');
  }
  getContributions(){
    return this.http.get('http://localhost:3000/LearningPlan')
  }
  getSubscriptions(){
    return this.http.get('http://localhost:3000/LearningPlan')
  }
  getPopularPlans(){
    return this.http.get('http://localhost:3000/LearningPlan')
  }
  getPlansById(LearningPlanID:string){
    return this.http.get('http://localhost:3000/LearningPlan'+LearningPlanID+'?text=id')
  }
  postQuestions(){

  }
  postResources(){

  }
  postLearningPlan(){
    
  }
  getYourSubs() {
    return this.http.get('http://localhost:3000/LearningPlan');
  }
  
  
}