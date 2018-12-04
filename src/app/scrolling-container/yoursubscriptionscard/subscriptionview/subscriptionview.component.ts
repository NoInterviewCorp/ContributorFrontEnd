import { Component, OnInit } from '@angular/core';
// import { Technology } from 'src/models/technology.model';
import { LearningPlan } from 'src/models/learningplan.model';
import { CommunicatorService } from 'src/app/services/communicator.service';

@Component({
  selector: 'app-subscriptionview',
  templateUrl: './subscriptionview.component.html',
  styleUrls: ['./subscriptionview.component.css']
})
export class SubscriptionviewComponent implements OnInit {

  plan:LearningPlan;
  rating: number;
  constructor(private com:CommunicatorService) { }

  ngOnInit() {
    this.plan=this.com.selectedLearningPlan;
    // console.log(this.plan);
    // console.log(this.plan.LearningPlanID);
  }
  onLearningPlanRating($event) {
    console.log("Rated the learning plan");
    // console.log($event);
    this.rating=this.com.getRating();
    // console.log(this.rating);
    // Call Service Methods to update the service in the backend - POST call
    this.com.sendRating(this.rating/*,this.plan.LearningPlanID*/);
    
  }

}
