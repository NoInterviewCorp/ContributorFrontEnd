import { Component, OnInit, Input } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';

@Component({
  selector: 'app-subscribecard',
  templateUrl: './subscribecard.component.html',
  styleUrls: ['./subscribecard.component.css']
})
export class SubscribecardComponent implements OnInit {
 @Input() plan: LearningPlan[];
 @Input() links:string[]= [];
  constructor() { }

  ngOnInit() {
  }

}
