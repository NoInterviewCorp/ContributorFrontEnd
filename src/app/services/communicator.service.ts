import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LearningPlan } from 'src/models/learningplan.model';
import { Resource } from 'src/models/resource.model';
import { Questions } from '../question.model';


@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private title: string;
  // hasClickedAddResources: boolean;
  editSelectedPlan: LearningPlan;
  selectedLearningPlan: LearningPlan;
  private resourceArray: Resource[] = [];
  private lastResourceIndex:number;
  addQuestion: Questions;

  constructor(private http: HttpClient) { }
  addResource(resource: Resource) {
    // adds the resource to it's local variable
    this.resourceArray.push(resource);
    // returns the index of the most recent added resource
    return this.resourceArray.length - 1;
  }
  getResource(index) {
    return this.resourceArray[index];
  }
  addQuestionToResourceOfIndex(index: number, question: Questions) {
    this.resourceArray[index].Questions.push(question);
  }
  getQuestionOfResource(index:number){
    return this.resourceArray[index].Questions;
  }
  setLastResourceIndex(index){
    this.lastResourceIndex = index;
  }
  getLastResourceIndex(){
    return this.lastResourceIndex;
  }
  getconcepts() {
    return this.http.get('http://localhost:3000/Concept');
  }
  getContributions() {
    return this.http.get('http://localhost:3000/LearningPlan')
  }
  getSubscriptions() {
    return this.http.get('http://localhost:3000/LearningPlan')
  }
  getPopularPlans() {
    return this.http.get('http://localhost:3000/LearningPlan')
  }
  getPlansById(LearningPlanID: string) {
    return this.http.get('http://localhost:3000/LearningPlan' + LearningPlanID + '?text=id')
  }
  postQuestions() {

  }
  postResources() {

  }
  postLearningPlan() {

  }
  getYourSubs() {
    return this.http.get('http://localhost:3000/LearningPlan');
  }


}