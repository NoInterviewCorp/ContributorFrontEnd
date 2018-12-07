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
  @Input() technologyName: string = "";
  constructor() {
  }
  ngOnInit() {
  }

  handleSave(index) {
    this.hasClickedSaveQuestion = true;
    this.index = index;
  }

  onClickOfSubmit() {
    console.log("Technology name is " + this.technologyName);
    this.questionObjs.forEach((q) => {
      q.technology.name = this.technologyName;
      console.log(q.technology.name);
    })
    this.hasClickedSubmit.emit(this.index);
    this.disableButton = true;
  }

  handleEventEmitter(errorstatus: ErrorStatus) {
    console.log(errorstatus);
    let index = errorstatus.MemberId - 1;
    this.noerror[index] = errorstatus.HasError;
    this.questionObjs[index] = errorstatus.QuestionObj;
  }

  postQuestions() {
    console.log(this.questionObjs);
  }

  addQuestion() {
    this.hasClickedAdd = true;
    this.questions.push(++this.lastNumber);
    this.noerror.push(false);
    this.questionObjs.push(new Question);
  }
  clickedClearInQuestions() {
    this.hasClickedClearInQuestions.emit(true);
  }
}
