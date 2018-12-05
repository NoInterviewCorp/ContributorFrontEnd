import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OptionForm } from './optionform.model';
import { Question } from '../question.model';
import { Option } from '../option.model';
import { CommunicatorService } from '../services/communicator.service';
import { Concept } from '../resourceform/resourceform.component';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-questionform',
  templateUrl: './questionform.component.html',
  styleUrls: ['./questionform.component.css']
})

export class QuestionformComponent implements OnInit {

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  @Output() noError = new EventEmitter();
  @Output() hasClickedSave = new EventEmitter();

  id: number;
  correctOption: number = -1;
  technologyName: string;
  question = new Question();
  hasErrors = false;
  disableButton: boolean;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  isValidArray: boolean[] = new Array(7).fill(false);
  questionObj: Question = new Question();
  options: OptionForm[] = [];
  optionsForm: FormGroup;
  questionFormGroup: FormGroup;
  
  get getFormGroup() { return this.questionFormGroup.controls; }
  get getOptionGroup() { return this.optionsForm.controls; }

  constructor(private fb: FormBuilder, private com: CommunicatorService) {
    for (let i = 0; i < 4; i++) {
      this.question.options.push(new Option());
    }
    this.questionObj.options = new Array(4).fill(new Option());
    this.id = this.com.getLastResourceIndex();

  }

  ngOnInit() {
    this.questionFormGroup = this.fb.group({
      problemStatementFC: ['', Validators.required],
      technologyNameFC: ['', Validators.required],
      conceptsFC: ['', Validators.required],
      bloomLevelFC: ['', Validators.required]
    })
    this.optionsForm = this.fb.group({
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      optionFormControl: ['', Validators.required]
    })
    this.getFormGroup.technologyNameFC.setValue(this.com.getTechnologyName(this.id));
  }

  clickedSave() {
    
    if (this.questionFormGroup.invalid || this.optionsForm.invalid) {
      this.hasErrors = true;
      this.disableButton = false;
      return;
    }
    this.disableButton = true;
    this.hasErrors = false;
    let formcontrols = this.getFormGroup;
    try {
      this.question.options.forEach((option, index) => {
        index++;
        option.content = this.optionsForm.get('option' + index).value;
      })
      this.question.problemStatement = formcontrols.problemStatementFC.value;
      this.question.options[this.getOptionGroup.optionFormControl.value].isCorrect = true;
      this.question.technology = formcontrols.technologyNameFC.value;
      this.question.bloomLevel = formcontrols.bloomLevelFC.value;
      this.com.addQuestionToResourceOfIndex(this.id, this.question);
      this.hasClickedSave.emit(this.id);
      this.disableButton = true;
    } catch (e) {
      console.log("=====================================================");
      console.log(e);
      console.log("=====================================================");
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.question.concepts.push({ name: value.trim() });
    }
    if (input) {
      input.value = '';
    }
  }

  remove(concept: Concept): void {
    console.log("Concept to be removed is " + concept.name);
    const index = this.question.concepts.indexOf(concept);
    if (index >= 0) {
      this.question.concepts.splice(index, 1);
    }
  }
}
