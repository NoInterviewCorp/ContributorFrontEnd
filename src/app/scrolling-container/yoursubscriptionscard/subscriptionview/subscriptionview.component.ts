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
  constructor(private com:CommunicatorService) { }

  ngOnInit() {
    this.plan=this.com.selectedLearningPlan;
    console.log(this.plan);
  }

}
