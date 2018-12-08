import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { CommunicatorService } from '../services/communicator.service';
import { LearningPlan } from 'src/models/learningplan.model';
import { Technology } from '../technology.model';
import { LearningPlanFeedBack } from 'src/models/learningplanfeedback.model';
@Component({
  selector: 'app-popularplans',
  templateUrl: './popularplans.component.html',
  styleUrls: ['./popularplans.component.css']
})

export class PopularplansComponent implements OnInit {


  domains: Technology[];
  selectedDomain: any;
  popularPlans: LearningPlan[] = [];
  constructor(private testService: TestService, private com: CommunicatorService) {

    // this.getPopular();
  }
  ngOnInit() {
    this.getDomains();
  }

  getDomains() {
    this.testService.getTechnologies().subscribe(
      (d: any) => {
        this.domains = d;
        console.log(this.domains);
        for (let domain of this.domains) {
          this.com.getPopularPlans(domain.name).subscribe(
            (plans: LearningPlan[]) => {
              plans.forEach(pa => this.popularPlans.push(pa));
            }
          )
        }
        console.log(this.popularPlans);
      }
    );
  }
  subscribePlan(leaningPlan:LearningPlan) {
    // leaningPlan.learningPlanId=this.plan.learningPlanId;
    let lpFeedback = new LearningPlanFeedBack();
    lpFeedback.LearningPlanID = leaningPlan.learningPlanId;
    
    // leaningPlan.UserId="user123";
    // leaningPlan.Subscribe=1;
    console.log(leaningPlan);
    this.com.subscribeToPlan(lpFeedback).subscribe((res: any) => {
      console.log("res is"+res);
  });
  }



}

  