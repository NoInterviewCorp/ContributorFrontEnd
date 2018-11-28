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
  resource: Resource = {
    ResourceId: "",
    ResourceName: "",
    ResourceLink: "",
    Description: "",
    BloomsTaxonomy: 1,
    Technology: {
      technologyId: 1,
      Name: "",
      Questions: [] //remove it laterr !!!!!!
    },
    Questions: [],
  };
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
  clickedAddResourceInEdit(){
    this.plan.Resources.push(this.resource);
  }
}
