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
  @Output() addQuestions = new EventEmitter();
  @Output() hasClickedDone = new EventEmitter();
  @Input() technologyName: string;
  resource: Resource;
  results: any = [];
  disableButton: boolean;
  hasErrors: boolean;
  resourceFormGroup: FormGroup;
  get getFormGroup() { return this.resourceFormGroup.controls; }

  constructor(private fb: FormBuilder, private com: CommunicatorService) { }

  ngOnInit() {
    this.resource = new Resource;
    this.resource.technologies[0].name = this.technologyName;
    this.resourceFormGroup = this.fb.group({
      resourceLinkFC: ['', Validators.required],
      conceptsFC: ['', Validators.required],
    })
  }
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
    this.addQuestions.emit(true);
  }

  clickedDone() {
    if (this.resourceFormGroup.invalid) {
      this.hasErrors = true;
      this.disableButton = false;
      return;
    }
    this.disableButton = true;
    this.hasErrors = false;
    let formcontrols = this.getFormGroup;
    try {
      this.resource.resourceLink = formcontrols.resourceLinkFC.value;
      console.log(this.resource);
      this.resource.authorId = this.com.resourceAuthorId;
      console.log(this.resource + " is the author id");
      let index = this.com.resourcecreator(this.resource);
      console.log("index is " + index);
      console.log(this.com.getResource(index));
      this.hasClickedDone.emit(index);
    } catch (e) {
      console.log(e)
    }

  }
}
