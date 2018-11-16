import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OptionForm } from './optionform.model';
import { Questions } from '../question.model';
import { Options } from '../option.model';
import { BloomTaxonomy } from '../bloomTaxonomy.model';

@Component({
  selector: 'app-questionform',
  templateUrl: './questionform.component.html',
  styleUrls: ['./questionform.component.css']
})
export class QuestionformComponent implements OnInit {
  @Input() id: number;
  @Output() noError = new EventEmitter();
  question = new FormControl('', [Validators.required]);
  options: OptionForm[] = [];

  questionObj: Questions = new Questions();
  resourcelink = new FormControl('', [Validators.required]);
  bloomlevel = new FormControl('', [Validators.required]);
  isValidArray: boolean[] = new Array(7).fill(false);
  form: FormGroup;
  items = [
    { key: 'item1' },
    { key: 'item2' },
    { key: 'item3' },
    { key: 'item4' },
  ];
  constructor(private fb: FormBuilder) {
    for (let i = 0; i < 4; i++) {
      this.options.push(new OptionForm());
    }
    this.questionObj.options = new Array(4).fill(new Options());
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
    this.noError.emit({ MemberId: this.id, HasError: areAllValid, QuestionObj:this.questionObj });
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
        this.questionObj.resourceLink = this.resourcelink.value;
        break;
      case 6:
        this.questionObj.bloomLevel = this.bloomlevel.value as BloomTaxonomy;
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



  getErrorMessage5() {
    this.noError.emit({ MemberId: this.id, HasError: false });
    this.isValidArray[5] = false;
    return this.resourcelink.hasError('required') ? 'You must enter a value' : '';
  }



  getErrorMessage6() {
    this.noError.emit({ MemberId: this.id, HasError: false });
    this.isValidArray[6] = false;
    return this.bloomlevel.hasError('required') ? 'You must enter a value' : '';
  }


}
