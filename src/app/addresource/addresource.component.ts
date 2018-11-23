import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ErrorStatus } from '../questions/errorstatus.model';
import { Resource } from 'src/models/resource.model';
import { CommunicatorService } from '../services/communicator.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-addresource',
  templateUrl: './addresource.component.html',
  styleUrls: ['./addresource.component.css']
})
export class AddresourceComponent implements OnInit {
  hasClickedAdd: boolean;
  resources: Array<number> = [1];
  lastNumber = this.resources.length;
  noerror: Array<boolean> = [false];
  haserror: boolean = false;
  hasnoerror: boolean = false;
  hasClickedAddQuestions: boolean;
  hasClickedClose: boolean;
  resource:Resource;
  @Output() hasClickedSave = new EventEmitter();
  hasClickedDone:boolean;
  constructor(private com:CommunicatorService) { }

  ngOnInit() {
  }
  clickedSave() {
    this.hasClickedSave.emit(true);
    // this.resource=this.com.addResource;
    // console.log(this.resource);
    }
    handleDone(done){
      this.hasClickedDone=done;
    }
  // addResource() {
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
