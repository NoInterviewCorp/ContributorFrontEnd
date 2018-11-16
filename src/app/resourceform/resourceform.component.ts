import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { QuestionsComponent } from '../questions/questions.component';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommunicatorService } from '../services/communicator.service';


export interface Concept {
  name: string;
}

@Component({
  selector: 'app-resourceform',
  templateUrl: './resourceform.component.html',
  styleUrls: ['./resourceform.component.css']
})

export class ResourceformComponent implements OnInit {
  @Input() id: number;
  @Output() noError = new EventEmitter();
   results:any=[];
  constructor(private com: CommunicatorService) { }

  ngOnInit() {
    // this.concept.valueChanges.subscribe(concept=>this.conceptSearch());
  }
  resourcelink = new FormControl('', [Validators.required]);
  bloomlevel = new FormControl('', [Validators.required]);
  concept=new FormControl('',[Validators.required]);
  isValidArray: boolean[] = new Array(3).fill(false);
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  concepts: Concept[] = [];
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || '').trim()) {
      this.concepts.push({name: value.trim()});
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(concept: Concept): void {
    const index = this.concepts.indexOf(concept);
    if (index >= 0) {
      this.concepts.splice(index, 1);
    }
  }
  

  getErrorMessage() {
    this.noError.emit({ MemberId: this.id, HasError: false });
    this.isValidArray[0] = false;
    return this.resourcelink.hasError('required') ? 'You must enter a value' : '';
  }
  getErrorMessage1() {
    this.noError.emit({ MemberId: this.id, HasError: false });
    this.isValidArray[1] = false;
    return this.concept.hasError('required') ? 'You must enter a value' : '';
  }
  getErrorMessage2() {
    this.noError.emit({ MemberId: this.id, HasError: false });
    this.isValidArray[2] = false;
    return this.bloomlevel.hasError('required') ? 'You must enter a value' : '';
  }

  getValidMessage(index: number) {
    this.isValidArray[index] = true;
    let areAllValid = true;
    // this.isValidArray.forEach(isValidItem => areAllValid = (areAllValid && isValidItem));
    for (let i = 0; i < this.isValidArray.length; i++) {
      areAllValid = (areAllValid && this.isValidArray[i]);
    }
    this.noError.emit({ MemberId: this.id, HasError: areAllValid});
  }
  // conceptSearch(){
  //  this.com.getconcepts().subscribe(res=>this.results=res);
  // console.log(this.results);
  // }
}
