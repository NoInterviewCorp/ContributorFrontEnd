import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LearningPlan } from 'src/models/learningplan.model';
import { Resource } from 'src/models/resource.model';
import { Question } from '../question.model';


@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private title: string;
  // hasClickedresourcecreators: boolean;
  editSelectedPlan: LearningPlan;
  selectedLearningPlan: LearningPlan;
  private resourceArray: Resource[] = [];
  private lastResourceIndex: number;
  addQuestion: Question;

  constructor(private http: HttpClient) { }
  resourcecreator(resource: Resource) {
    // adds the resource to it's local variable
    this.resourceArray.push(resource);
    // returns the index of the most recent added resource
    return this.resourceArray.length - 1;
  }
  getResource(index) {
    return this.resourceArray[index];
  }
  addQuestionToResourceOfIndex(index: number, question: Question) {
    this.resourceArray[index].questions.push(question);
  }
  getQuestionOfResource(index: number) {
    return this.resourceArray[index].questions;
  }
  setLastResourceIndex(index) {
    this.lastResourceIndex = index;
  }
  getLastResourceIndex() {
    return this.lastResourceIndex;
  }
  getTechnologyName(index:number){
    return this.resourceArray[index].technologies[0].name;
  }
  getconcepts() {
    return this.http.get('http://172.23.238.173:5002/Concept');
  }
  getContributions() {
    return this.http.get('http://172.23.238.173:5002/LearningPlan')
  }
  getSubscriptions() {
    return this.http.get('http://172.23.238.173:5002/LearningPlan')
  }
  getPopularPlans() {
    return this.http.get('http://172.23.238.173:5002/LearningPlan')
  }
  getPlansById(LearningPlanID: string) {
    return this.http.get('http://172.23.238.173:5002/LearningPlan' + LearningPlanID + '?text=id')
  }
  
  postResources(resource:Resource) {
    return this.http.post('http://172.23.238.173:5002/Resource',resource);
  }
  postLearningPlan(learningplan:LearningPlan) {
    return this.http.post('http://172.23.238.173:5002/LearningPlan',learningplan);
  }
  putLearningPlan(learningplan:LearningPlan){
    return this.http.put('http://172.23.238.173:5002/LearningPlan/'+ learningplan.learningPlanId ,learningplan);
  }
  getYourSubs() {
    return this.http.get('http://172.23.238.173:5002/LearningPlan');
  }
  putResource(resource:Resource){
    return this.http.put('http://172.23.238.173:5002/Resource/' +resource.resourceId,resource);
  }


}