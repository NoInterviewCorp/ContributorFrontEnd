import { Component, OnInit, Input } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';
import { LearningPlanFeedBack } from 'src/models/learningplanfeedback.model';
import { CommunicatorService } from 'src/app/services/communicator.service';
@Component({
  selector: 'app-subscribecard',
  templateUrl: './subscribecard.component.html',
  styleUrls: ['./subscribecard.component.css']
})
export class SubscribecardComponent implements OnInit {
 @Input() plan: LearningPlan;
 @Input() links:string[]= [];
 subPlan= new LearningPlanFeedBack();
  constructor(private com:CommunicatorService) { }

  ngOnInit() {
  }

  subscribePlan() {
    this.subPlan.LearningPlanID=this.plan.learningPlanId;
    // this.subPlan.UserId="user123";
    // this.subPlan.Subscribe=1;
    console.log(this.subPlan);
    this.com.subscribeToPlan(this.subPlan).subscribe((res: any) => {
      console.log("res is"+res);
  });
  }
}
