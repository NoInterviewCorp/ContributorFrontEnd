import { Component, OnInit, Input } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';
import { LearningPlanFeedBack } from 'src/models/learningplanfeedback.model';
@Component({
  selector: 'app-subscribecard',
  templateUrl: './subscribecard.component.html',
  styleUrls: ['./subscribecard.component.css']
})
export class SubscribecardComponent implements OnInit {
 @Input() plan: LearningPlan;
 @Input() links:string[]= [];
 subPlan= new LearningPlanFeedBack();
  constructor() { }

  ngOnInit() {
  }

  subscribePlan() {
    this.subPlan.LearningPlanID=this.plan.LearningPlanID;
    this.subPlan.UserId="user123";
    this.subPlan.Subscribe=1;
  }
}
