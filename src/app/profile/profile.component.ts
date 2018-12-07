import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from '../services/communicator.service';
import { LearningPlan } from 'src/models/learningplan.model';
import { Subscription } from 'rxjs';

@Component({
 selector: 'app-profile',
 templateUrl: './profile.component.html',
 styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 contributions: LearningPlan[];
 subscriptions: LearningPlan[];
 constructor(private communicator: CommunicatorService) {
 }

 ngOnInit() {
   this.getContributions();
   this.getSubscriptions();
 }

 getContributions() {
   this.communicator.getContributions().subscribe((contributions: LearningPlan[]) => {
     this.contributions = contributions;
   });
 }

 getSubscriptions() {
   this.communicator.getSubscriptions().subscribe((subscriptions: LearningPlan[]) => {
     this.subscriptions = subscriptions;
   })
 }

 //handle Unsubscribe Func
 handleUnsubscribe(something) {
   console.log(something);
   const index = this.subscriptions.findIndex(
     subscriptions => subscriptions.learningPlanId === something);
     this.subscriptions.splice(index, 1);
   console.log(this.subscriptions);
 }

}