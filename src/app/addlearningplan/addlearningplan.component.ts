import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/models/resource.model';
import { CommunicatorService } from '../services/communicator.service';
import { Questions } from '../question.model';


@Component({
  selector: 'app-addlearningplan',
  templateUrl: './addlearningplan.component.html',
  styleUrls: ['./addlearningplan.component.css']
})
export class AddlearningplanComponent implements OnInit {
  resIndexForAddingQuestions: number;
  hasClickedAddResource: boolean;
  hasClickedSaveResource: boolean;
  hasClickedSubmitQuestion: boolean
  resource: Resource;
  resources: Resource[] = [];
  hasClickedAddQuestions: boolean;
  hasClickedClearQuestions: boolean;
  hasClickedResourceToEdit: boolean;
  hasClickedClearInResourceEdit: boolean;
  constructor(private com: CommunicatorService) { }

  ngOnInit() {

  }

  handleSave(index) {
    this.hasClickedSaveResource = (index >= 0);
    this.resources.push(this.com.getResource(index))
    console.log(this.resources[index]);
  }

  handleSubmit(index) {
    this.hasClickedSubmitQuestion = true;
    this.resources[index].Questions = this.com.getQuestionOfResource(index);
    console.log(this.resources);
  }
  handleClearInQuestions(clear) {
    this.hasClickedClearQuestions = clear;
  }
  postLearningPlan() {
  }
  clickedAddResource() {
    this.hasClickedAddResource = true;
    this.hasClickedSaveResource = false;
  }
  clickedAddQuestions(index) {
    this.hasClickedClearQuestions = false;
    this.hasClickedAddQuestions = true;
    this.hasClickedSubmitQuestion = false;
    this.resIndexForAddingQuestions = index;
    this.com.setLastResourceIndex(this.resIndexForAddingQuestions);
    console.log(this.resIndexForAddingQuestions);
  }
  clickedResourceToEdit(index) {
    this.resource = this.resources[index];
    this.hasClickedResourceToEdit = true;
    this.hasClickedClearInResourceEdit = false;
  }
  handleClearInResourceEdit(clear) {
    this.hasClickedClearInResourceEdit = clear;
  }
}
