import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OptionForm } from './optionform.model';
import { Question } from '../question.model';
import { Option } from '../option.model';
import { BloomTaxonomy } from '../bloomTaxonomy.model';
import { CommunicatorService } from '../services/communicator.service';
import { Resource } from 'src/models/resource.model';
import { Technology } from '../technology.model';
import { Concept } from '../resourceform/resourceform.component';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-questionform',
  templateUrl: './questionform.component.html',
  styleUrls: ['./questionform.component.css']
})

export class QuestionformComponent implements OnInit {
  id: number;
  technologyName: string;
  @Output() noError = new EventEmitter();
  @Output() hasClickedSave = new EventEmitter();
  disableButton: boolean;
  // options:Options[] = ?
  questions: Question = {
    questionId: null,
    problemStatement: "",
    options: [],
    correctOptionId: "",
    bloomLevel: 1,
    hasPublished: false,
    technology: {
      name: ""
    },
    concepts: []
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
      this.questions.concepts.push({ name: value.trim() });
    }
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

  question = new FormControl('', [Validators.required]);
  options: OptionForm[] = [];
  questionObj: Question = new Question();
  resourcelink = new FormControl('', [Validators.required]);
  bloomlevel = new FormControl('', [Validators.required]);
  technologyname = new FormControl('', [Validators.required]);
  isValidArray: boolean[] = new Array(7).fill(false);
  form: FormGroup;
  items = [
    { key: 'item1' },
    { key: 'item2' },
    { key: 'item3' },
    { key: 'item4' },
  ];
  constructor(private fb: FormBuilder, private com: CommunicatorService) {
    for (let i = 0; i < 4; i++) {
      this.options.push(new OptionForm());
      this.questions.options.push(new Option());
    }
    this.questionObj.options = new Array(4).fill(new Option());
    this.id = this.com.getLastResourceIndex();
    this.technologyName = this.com.getTechnologyName(this.id);
  }

  ngOnInit() {
    // create checkbox group
    let checkboxGroup = new FormArray(this.items.map(item => new FormGroup({
      id: new FormControl(item.key),
      // text: new FormControl(item.text),
      checkbox: new FormControl(false)
    })));

    // create a hidden reuired formControl to keep status of checkbox group
    let hiddenControl = new FormControl(this.mapItems(checkboxGroup.value), Validators.required);
    // update checkbox group's value to hidden formcontrol
    checkboxGroup.valueChanges.subscribe((v) => {
      hiddenControl.setValue(this.mapItems(v));
    });

    this.form = new FormGroup({
      items: checkboxGroup,
      selectedItems: hiddenControl
    });
  }

  mapItems(items) {
    let selectedItems = items.filter((item) => item.checkbox).map((item) => item.text);
    //this.selectedITEMS = selectedItems;
    return selectedItems.length ? selectedItems : null;
  }
  clickedSave() {
    this.com.addQuestionToResourceOfIndex(this.id, this.questions);
    this.hasClickedSave.emit(this.id);
    this.disableButton = true;
  }
  getErrorMessage() {
    this.noError.emit({ MemberId: this.id, HasError: false });
    this.isValidArray[0] = false;
    return this.question.hasError('required') ? 'You must enter a value' : '';
  }

  getValidMessage(index: number) {
    this.isValidArray[index] = true;
    let areAllValid = true;
    // this.isValidArray.forEach(isValidItem => areAllValid = (areAllValid && isValidItem));
    for (let i = 0; i < this.isValidArray.length; i++) {
      areAllValid = (areAllValid && this.isValidArray[i]);
    }
    // console.log(this.form.controls.items.value);
    // this.options.forEach(optionForm=>{
    //   this.questionObj.options.push(optionForm.option);
    // })
    this.createQuestionObject(index);
    // console.log(this.questionObj);
    this.noError.emit({ MemberId: this.id, HasError: areAllValid, QuestionObj: this.questionObj });
  }

  createQuestionObject(index) {
    switch (index) {
      case 0:
        this.questionObj.problemStatement = this.question.value;
        break;
      case 1: case 2: case 3: case 4:
        this.options[index - 1].option.content = this.options[index - 1].formControl.value;
        // console.log(this.options[index - 1].formControl.value)
        this.options[index - 1].option.isCorrect = this.form.controls.items.value[index - 1].checkbox;
        break;
      case 5:
        this.questionObj.bloomLevel = this.bloomlevel.value as BloomTaxonomy;
        break;
      case 6:
        break;
      default:
        console.log("Invalid value");
        break;
    }
    if (index < 5 && index > 0) {
      this.questionObj.options[index - 1] = this.options[index - 1].option;
      // console.log( this.options[index-1].option);
    }
  }

  getErrorMessage1(index: number) {
    this.noError.emit({ MemberId: this.id, HasError: false });
    this.isValidArray[index + 1] = false;
    return this.options[index].formControl.hasError('required') ? 'You must enter a value' : '';
  }



  // getErrorMessage5() {
  //   this.noError.emit({ MemberId: this.id, HasError: false });
  //   this.isValidArray[5] = false;
  //   return this.resourcelink.hasError('required') ? 'You must enter a value' : '';
  // }



  getErrorMessage5() {
    this.noError.emit({ MemberId: this.id, HasError: false });
    this.isValidArray[5] = false;
    return this.bloomlevel.hasError('required') ? 'You must enter a value' : '';
  }
  getErrorMessage6() {
    this.noError.emit({ MemberId: this.id, HasError: false });
    this.isValidArray[6] = false;
    return this.technologyname.hasError('required') ? 'You must enter a value' : '';
  }


}
