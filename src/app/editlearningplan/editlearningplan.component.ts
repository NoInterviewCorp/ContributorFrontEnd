import { Component, OnInit } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';
import { CommunicatorService } from '../services/communicator.service';

@Component({
  selector: 'app-editlearningplan',
  templateUrl: './editlearningplan.component.html',
  styleUrls: ['./editlearningplan.component.css']
})
export class EditlearningplanComponent implements OnInit {
  plan: LearningPlan;
  constructor(private com:CommunicatorService) { }

  ngOnInit() {
    this.plan=this.com.editSelectedPlan;
    console.log(this.plan);
  }
  
  

}
