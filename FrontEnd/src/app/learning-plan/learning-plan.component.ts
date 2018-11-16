import { Component, OnInit } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-learning-plan',
  templateUrl: './learning-plan.component.html',
  styleUrls: ['./learning-plan.component.css']
})
export class LearningPlanComponent implements OnInit {

  plan: LearningPlan = {
    learningPlanId: 1,
    avatar: "../../assets/placeholder-team.jpg",
    downVotes: 5,
    upVotes: 96,
    owner: "Jack",
    summary: "C# learning plan suited for beginners, experts.C# learning plan suited for beginners, expertsC# learning plan suited for beginners, expertsC# learning plan suited for beginners, experts",
    technology: "C#",
    resources: ['link', 'link', 'link', 'link', 'link', 'link', 'link', 'link', 'link', 'link']
  }
  data: string[] = [];
  constructor() {
    for (let index = 0; index < 2; index++) {
      this.data.push(this.plan.resources[index]);
    }
  }

  ngOnInit() {
  }

}
