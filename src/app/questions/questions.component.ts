import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
//import { SMEService } from '../../services/sme.service';
import { Question } from '../question.model';
import { ErrorStatus } from './errorstatus.model';
import { CommunicatorService } from '../services/communicator.service';
//import { CommunicatorService } from '../../services/communicator.service'
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  hasClickedSaveQuestion: boolean;
  @Output() hasClickedSubmit = new EventEmitter();
  @Output() hasClickedClearInQuestions = new EventEmitter();
  index: number;
  questions: Array<number> = [this.index];
  questionObjs: Question[] = [new Question()];
  lastNumber = this.questions.length;
  noerror: Array<boolean> = [false];
  haserror: boolean = false;
  hasnoerror: boolean = false;
  hasClickedAdd: boolean = false;
  hasAdded3Qs: boolean = false;
  disableButton: boolean;
  @Input() technologyName:string="";
  constructor() {
  }
  //private bottomSheetRef: MatBottomSheetRef<QuestionsComponent>
  ngOnInit() {
  }

  handleSave(index) {
    this.hasClickedSaveQuestion = true;
    this.index = index;
    let result: boolean;
    console.log("error is " + this.noerror);
    if (this.noerror.length > 1) {
      for (let k = 0; k < this.noerror.length - 1; k++) {
        result = (this.noerror[k]) && (this.noerror[k + 1]);
      }
    } else {
      result = this.noerror[0];
    }
    console.log("result is " + result);
    if (result) {
      this.haserror = false;
      this.hasnoerror = true;
      console.log("no error");
      this.postQuestions();
    }
    else {
      this.haserror = true;
      this.hasnoerror = false;
    }
  }

  onClickOfSubmit() {
    // let result: boolean;
    // console.log("error is " + this.noerror);
    // if (this.noerror.length > 1) {
    //   for (let i = 0; i < this.noerror.length - 1; i++) {
    //     result = (this.noerror[i]) && (this.noerror[i + 1]);
    //   }
    // } else {
    //   result = this.noerror[0];
    // }
    // console.log("result is " + result);
    // if (result) {
    //   this.haserror = false;
    //   this.hasnoerror = true;
    //   console.log("no error");
    //   this.postQuestions();
    // }
    // else {
    //   this.haserror = true;
    //   this.hasnoerror = false;
    // }
    this.hasClickedSubmit.emit(this.index);
    this.disableButton = true;
  }

  handleEventEmitter(errorstatus: ErrorStatus) {
    //this.noerror = hasNoError
    console.log(errorstatus);
    let index = errorstatus.MemberId - 1;
    this.noerror[index] = errorstatus.HasError;
    this.questionObjs[index] = errorstatus.QuestionObj;
  }

  postQuestions() {
    console.log(this.questionObjs);
    // this.svc.submitQuestions();
  }

  addQuestion() {
    //console.log("clicked");
    this.hasClickedAdd = true;
    this.questions.push(++this.lastNumber);
    this.noerror.push(false);
    this.questionObjs.push(new Question);
    // if (this.questions.length >= 3) {
    //   this.hasAdded3Qs = true;
    // }
  }
  clickedClearInQuestions() {
    this.hasClickedClearInQuestions.emit(true);

  }
}
