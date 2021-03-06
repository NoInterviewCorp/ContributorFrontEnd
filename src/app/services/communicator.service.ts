import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LearningPlan } from 'src/models/learningplan.model';
import { Resource } from 'src/models/resource.model';
import { Question } from '../question.model';
import { UserProfile } from 'src/models/userprofile.model';
import { UserWrapper } from 'src/models/userprofile.model';
import { LearningPlanFeedBack } from 'src/models/learningplanfeedback.model';


@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  user = new UserProfile;
  private title: string;
  // hasClickedresourcecreators: boolean;
  editSelectedPlan: LearningPlan;
  editSelectedResource: Resource;
  selectedLearningPlan: LearningPlan;
  private resourceArray: Resource[] = [];
  private lastResourceIndex: number;
  resourceAuthorId = this.user.userId;
  addQuestion: Question;
  rating: number;

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
  addTechnologyToAllEntities(techName: string) {
    this.resourceArray.forEach((r) => {
      r.technologies[0].name = techName;
      r.questions.forEach(q => {
        q.technology.name = techName;
      })
    })
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
  getTechnologyName(index: number) {
    return this.resourceArray[index].technologies[0].name;
  }

  getconcepts() {
    return this.http.get('http://172.23.238.173:5002/Concept');
  }
  getContributions() {
    return this.http.get('http://172.23.238.173:5002/LearningPlan/' + this.user.userId + '?type=username');
  }
  getSubscriptions() {
    return this.http.get('http://172.23.238.173:5002/LearningPlan/' + this.user.userId + '?type=subscriptions');
  }
  getPopularPlans(techName) {
    return this.http.get('http://172.23.238.173:5002/LearningPlan/' + techName + '?type=popular');
  }
  getPlansById(LearningPlanID: string) {
    return this.http.get('http://172.23.238.173:5002/LearningPlan/' + LearningPlanID + '?text=id');
  }

  postResource(resource: Resource) {
    return this.http.post('http://172.23.238.173:5002/Resource', resource);
  }
  postLearningPlan(learningplan: LearningPlan) {
    return this.http.post('http://172.23.238.173:5002/LearningPlan', learningplan);
  }
  putLearningPlan(learningplan: LearningPlan) {
    // console.log("PUTTING TO  http://172.23.238.173:5002/LearningPlan/" + learningplan.learningPlanId);
    // console.log(learningplan);
    return this.http.put('http://172.23.238.173:5002/LearningPlan/' + learningplan.learningPlanId, learningplan);
  }
  getYourSubs() {
    return this.http.get('http://172.23.238.173:5002/LearningPlan');
  }
  getResourceById(UserId: string) {
    return this.http.get('http://172.23.238.173:5002/Resource/' + UserId);
  }
  putResource(resource: Resource) {
    return this.http.put('http://172.23.238.173:5002/Resource/' + resource.resourceId, resource);
  }
  getUser(UserId: string) {
    //console.log('http://172.23.238.173:5004/values/' + UserId);
    return this.http.get('http://172.23.238.173:5004/values/' + UserId);
  }
  getUserReport() {
    return this.http.get('http://172.23.238.173:5004/values/userreport/' + this.user.userId);
  }
  getQuizResults(UserId: string) {
    return this.http.get('http://172.23.238.173:5004/values/quizresult/' + this.user.userId);
  }
  getQuestions(resource: Resource) {
    return this.http.get('http://172.23.238.173:5002/Question/' + resource.resourceId)
  }
  putUser(user: UserProfile) {
    return this.http.put('http://172.23.238.173:5004/values/' + user.userId, user);
  }
  postUser(user: UserWrapper) {
    return this.http.post('http://172.23.238.173:5004/values/UserNode', user);
  }
  // postUser(user:UserProfile){
  //   return this.http.post('http://172.23.238.173:5004/LearningPlan',user);

  // }

  setRating(r: number) {
    this.rating = r;
  }

  getRating() {
    return this.rating;
  }


  unsubscribeToPlan(unsubPlan: LearningPlanFeedBack) {
    return this.http.post('http://172.23.238.173:5004/values/UnSubscriberLearningPlan', unsubPlan);
  }

  subscribeToPlan(subPlan: LearningPlanFeedBack) {
    subPlan.UserId = this.user.userId;
    return this.http.post('http://172.23.238.173:5004/values/SubscriberLearningPlan', subPlan);
  }



  sendRating(r: LearningPlanFeedBack) {
    return this.http.post('http://172.23.238.173:5004/values/RatingLearningPlan', r);
  }

}