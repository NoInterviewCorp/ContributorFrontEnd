import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';
import { CommunicatorService } from '../services/communicator.service';
import { Resource } from 'src/models/resource.model';

@Component({
  selector: 'app-editlearningplan',
  templateUrl: './editlearningplan.component.html',
  styleUrls: ['./editlearningplan.component.css']
})
export class EditlearningplanComponent implements OnInit {
  plan: LearningPlan;
  // resource: Resource;
  // @Output() hasClickedSaveInEdit = new EventEmitter;
  // @Output() hasClickedClearInEdit = new EventEmitter;
  disableButton: boolean;
  hasClickedAddResource: boolean;
  // hasClickedAddQuestionsInEditLP:boolean;
  // resources[]=LearningPlan.Resources[];
  constructor(private com: CommunicatorService) {
  }

  ngOnInit() {
    this.plan = this.com.editSelectedPlan;
    console.log(this.plan);
  }
  clickedSaveInEdit() {
    // this.hasClickedSaveInEdit.emit(true);
    this.disableButton = true;
    console.log(this.plan);
    this.com.putLearningPlan(this.plan)
    .subscribe(res => {
      console.log("result is  " + res);
    });
  }
  
  clickedresourcecreatorInEdit() {
    this.plan.resources.push(new Resource);
    this.hasClickedAddResource = true;
  }
  // clickedAddQuestionsInEditLP(){
  //   this.hasClickedAddQuestionsInEditLP=true;
  // }

}
