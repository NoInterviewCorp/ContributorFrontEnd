import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ErrorStatus } from '../questions/errorstatus.model';
import { Resource } from 'src/models/resource.model';
import { CommunicatorService } from '../services/communicator.service';
import { Question } from '../question.model';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-resourcecreator',
  templateUrl: './resourcecreator.component.html',
  styleUrls: ['./resourcecreator.component.css']
})
export class resourcecreatorComponent implements OnInit {
  hasClickedAdd: boolean;
  resources: Array<number> = [1];
  lastNumber = this.resources.length;
  noerror: Array<boolean> = [false];
  haserror: boolean = false;
  hasnoerror: boolean = false;
  hasClickedAddQuestions: boolean;
  hasClickedClose: boolean;
  resource: Resource;
  disableButton: boolean;
  @Output() hasClickedSave = new EventEmitter();
  index: number = -1;
  hasClickedDone: boolean;
  questions: Question[]
  @Input() hasClickedSubmit: boolean
  constructor(private com: CommunicatorService) { }

  ngOnInit() {

  }
  clickedSave() {
    console.log("resourcecreator index is " + this.index)
    this.hasClickedSave.emit(this.index);
    this.disableButton = true;

    // this.resource=this.com.resourcecreator;
    // console.log(this.resource);
  }
  handleDone(index) {
    this.hasClickedDone = true;
    this.index = index;
  }
  // resourcecreator() {
  //   //console.log("clicked");
  //   this.hasClickedAdd = true;
  //   this.resources.push(++this.lastNumber);
  // }
  handleEventEmitter(errorstatus: ErrorStatus) {
    //this.noerror = hasNoError
    // console.log(hasNoError);
    let index = errorstatus.MemberId - 1;
    this.noerror[index] = errorstatus.HasError;
    //this.questionObjs[index] = errorstatus.QuestionObj;
  }
  // handleAddQuestions(addquestions) {
  //   this.hasClickedAddQuestions = addquestions;
  //   this.hasClickedClose = false;
  // }
  onClick() {
    let result: boolean;
    for (let i = 0; i < this.noerror.length - 1; i++) {
      result = (this.noerror[i]) && (this.noerror[i + 1]);
    }
    if (result) {
      this.haserror = false;
      this.hasnoerror = true;
    }
    else {
      this.haserror = true;
      this.hasnoerror = false;
    }
  }
  postResources() {

  }
  clickedClose() {
    this.hasClickedClose = true;
  }
}
