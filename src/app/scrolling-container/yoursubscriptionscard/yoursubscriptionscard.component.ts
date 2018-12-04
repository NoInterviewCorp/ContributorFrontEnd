import { Component, OnInit, Input, Inject } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';
import { LearningPlanFeedBack } from 'src/models/learningplanfeedback.model';
// import { Technology } from 'src/models/technology.model';
import { HttpClient } from '@angular/common/http';
import { CommunicatorService } from 'src/app/services/communicator.service';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
 selector: 'app-yoursubscriptionscard',
 templateUrl: './yoursubscriptionscard.component.html',
 styleUrls: ['./yoursubscriptionscard.component.css']
})
export class YoursubscriptionscardComponent implements OnInit {

  @Input() plan: LearningPlan;
  // @Input() 
  unsubPlan= new LearningPlanFeedBack();
 
  constructor(private http:HttpClient,private com:CommunicatorService) { }
 
  ngOnInit() {
    // this.unsubPlan.UserId="user1";
    // this.unsubPlan.LearningPlanFeedBackId=0;
    // this.unsubPlan.LearningPlanID="";
    // this.unsubPlan.Subscribe=0;
 }
 
  sendPlan() {
  //  console.log(this.plan);
   this.com.selectedLearningPlan=this.plan;
   console.log(this.com.selectedLearningPlan);
}

 unsubscribePlan() {
   this.unsubPlan.LearningPlanID=this.plan.LearningPlanID;
   this.unsubPlan.UserId="user123";
   console.log(this.unsubPlan);
   // console.log(this.plan);
   this.com.unsubscribe(this.unsubPlan).subscribe((res: any) => {
   console.log("res is"+res);
 });
}
}
