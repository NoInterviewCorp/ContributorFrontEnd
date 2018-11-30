import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/models/resource.model';
import { CommunicatorService } from '../services/communicator.service';
import { Questions } from '../question.model';
import { Technology } from '../technology.model';


@Component({
  selector: 'app-learningplancreator',
  templateUrl: './learningplancreator.component.html',
  styleUrls: ['./learningplancreator.component.css']
})
export class learningplancreatorComponent implements OnInit {
  resIndexForAddingQuestions: number;
  hasClickedresourcecreator: boolean;
  hasClickedSaveResource: boolean;
  hasClickedSubmitQuestion: boolean
  resource: Resource;
  resources: Resource[] = [];
  technologyName:string="";
  hasClickedAddQuestions: boolean;
  hasClickedClearQuestions: boolean;
  hasClickedResourceToEdit: boolean;
  hasClickedClearInResourceEdit: boolean;
  hasClickedClearInresourcecreatorInLP:boolean;

  constructor(private com: CommunicatorService) { }

  ngOnInit() {

  }

  handleSave(index) {
    this.hasClickedSaveResource = (index >= 0);
    this.resources.push(this.com.getResource(index))
    console.log(this.resources[index]);
    this.hasClickedClearInresourcecreatorInLP=true;
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
  clickedresourcecreator() {
    this.hasClickedresourcecreator = true;
    this.hasClickedSaveResource = false;
    this.hasClickedClearInresourcecreatorInLP=false;
  }
  clickedAddQuestions(index) {
    this.hasClickedClearQuestions = false;
    this.hasClickedAddQuestions = true;
    this.hasClickedSubmitQuestion = false;
    this.resIndexForAddingQuestions = index;
    this.com.setLastResourceIndex(this.resIndexForAddingQuestions);
    console.log(this.resIndexForAddingQuestions);
    this.technologyName=this.resources[index].Technology.Name;
  }
  clickedResourceToEdit(index) {
    this.resource = this.resources[index];
    this.hasClickedResourceToEdit = true;
    this.hasClickedClearInResourceEdit = false;
  }
  handleClearInResourceEdit(clear) {
    this.hasClickedClearInResourceEdit = clear;
  }
  clickedClearInresourcecreatorInLP(){
    this.hasClickedClearInresourcecreatorInLP=true;
  }
}