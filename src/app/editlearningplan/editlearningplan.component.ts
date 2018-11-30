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
  @Output() hasClickedSaveInEdit = new EventEmitter;
  @Output() hasClickedClearInEdit = new EventEmitter;
  disableButton: boolean;
  // resources[]=LearningPlan.Resources[];
  constructor(private com: CommunicatorService) { }

  ngOnInit() {
    this.plan = this.com.editSelectedPlan;
    console.log(this.plan);
  }
  clickedSaveInEdit() {
    this.hasClickedSaveInEdit.emit(true);
    this.disableButton = true;
  }
  clickedClearInEdit() {
    this.hasClickedClearInEdit.emit(true);
  }
  clickedresourcecreatorInEdit() {
    this.plan.Resources.push(new Resource);
  }
}
