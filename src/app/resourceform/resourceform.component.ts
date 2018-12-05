import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { QuestionsComponent } from '../questions/questions.component';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommunicatorService } from '../services/communicator.service';
import { Resource } from 'src/models/resource.model';
import { Question } from '../question.model';


export class Concept {
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
  @Output() addQuestions = new EventEmitter();
  @Output() hasClickedDone = new EventEmitter();
  @Input() technologyName:string;
  resource: Resource;
  //  hasClickedAddQuestions:boolean;
  results: any = [];
  disableButton: boolean;
  constructor(private com: CommunicatorService) { }

  ngOnInit() {
    this.resource = new Resource;
    this.resource.technologies[0].name=this.technologyName;
  }

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
    if ((value || '').trim()) {
      this.resource.concepts.push({ name: value.trim() });
    }
    if (input) {
      input.value = '';
    }
  }

  remove(concept: Concept): void {
    const index = this.resource.concepts.indexOf(concept);
    if (index >= 0) {
      this.resource.concepts.splice(index, 1);
    }
  }

  clickedAddQuestions() {
    // this.hasClickedAddQuestions = true;
    this.addQuestions.emit(true);
  }

  clickedDone() {
    this.resource.authorId=this.com.resourceAuthorId;
    console.log(this.resource + " is the author id");
    let index = this.com.resourcecreator(this.resource);
    console.log("index is " + index);
    console.log(this.com.getResource(index));
    this.hasClickedDone.emit(index);
    this.disableButton = true;
  }
}
