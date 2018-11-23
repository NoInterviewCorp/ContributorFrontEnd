import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
//import { SMEService } from '../../services/sme.service';
import { Questions } from '../question.model';
import { ErrorStatus } from './errorstatus.model';
//import { CommunicatorService } from '../../services/communicator.service'
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  hasClickedSaveQuestion:boolean;
  questions: Array<number> = [1];
  questionObjs: Questions[] = [new Questions()];
  lastNumber = this.questions.length;
  noerror: Array<boolean> = [false];
  haserror: boolean = false;
  hasnoerror: boolean = false;
  hasClickedAdd: boolean = false;
  hasAdded3Qs: boolean = false;
  constructor() { }
  //private bottomSheetRef: MatBottomSheetRef<QuestionsComponent>
  ngOnInit() {
  }
handleSave(save){
  this.hasClickedSaveQuestion=save;
}

  onClickOfSubmit() {
    let result: boolean;
    console.log("error is " + this.noerror);
    if (this.noerror.length > 1) {
      for (let i = 0; i < this.noerror.length - 1; i++) {
        result = (this.noerror[i]) && (this.noerror[i + 1]);
      }
    } else {
      result = this.noerror[0];
    }
    // // *********** END *****************
    // // Development Part FOR AT LEAST 5 QS
    // // ******DEVELOPMENT BUILD PART STARTS HERE*****
    // if (!this.hasAdded3Qs) {
    //   return;
    // }
    // else {
    //   for (let i = 0; i < this.noerror.length - 1; i++) {
    //     result = (this.noerror[i]) && (this.noerror[i + 1]);
    //   }
    // }
    // // *********** END *****************

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

  handleEventEmitter(errorstatus: ErrorStatus) {
    //this.noerror = hasNoError
    // console.log(hasNoError);
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
    this.questionObjs.push(new Questions);
    // if (this.questions.length >= 3) {
    //   this.hasAdded3Qs = true;
    // }
  }
}
