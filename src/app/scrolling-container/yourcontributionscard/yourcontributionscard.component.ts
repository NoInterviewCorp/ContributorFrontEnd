import { Component, OnInit, Input } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';

@Component({
  selector: 'app-yourcontributionscard',
  templateUrl: './yourcontributionscard.component.html',
  styleUrls: ['./yourcontributionscard.component.css']
})
export class YourcontributionscardComponent implements OnInit {
  @Input() plan: LearningPlan;
  constructor() {
   }
  ngOnInit() {
    console.log(this.plan.LearningPlanID);
  }

}
