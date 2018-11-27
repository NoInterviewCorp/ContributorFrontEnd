import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Technology } from '../technology.model';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //toggle = true;
  toggle: any;
  // toggle='green';
  status = 'Enable';
  selectedTech: any;
  questions: any;
  duration = 1000; //timer duration
  counter: number = this.duration;
  i: number = 0;
  questionCounter = 0;
  selectedOption: string;
  shouldDisplayQuestions = false;
  currentQuestion: any;
  showTimer = false;
  showNextButton = false;
  showQuesButton = true;
  showProgressBar = false;
  quesCount = 0;
  totalQues = 0;
  callResult = false;
  value = 0;
  valueInc = 0;
  concepts: any[];
  selectedConceptArray: any[];
  techName: string; subTopicName: string;
  // toggles=[true, true, true, true];
  toggles: boolean[];
  isSelected: boolean[];
  maxSelectableConcepts = 0;
  hasSelectedMaxConcepts = false;

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getConceptsFunction();
  }

  toggleColor(j) {
    if (this.toggles[j] == true) {
      this.toggles[j] = false;
    }
    else if (this.toggles[j] == false) {
      this.toggles[j] = true;
    }
  }

  selectConcept(k) {
    if (this.isSelected[k] == false) {
      this.maxSelectableConcepts++;
      this.isSelected[k] = true;
      if (this.maxSelectableConcepts >= 4) {
        console.log("dont select more");
        this.hasSelectedMaxConcepts = true;
        this.disableButtons();
      }

      // console.log("count after selection:"+this.maxSelectableConcepts+this.isSelected);
    }
    else if (this.isSelected[k] == true) {
      this.isSelected[k] = false;
      this.maxSelectableConcepts--;
      if (this.hasSelectedMaxConcepts && this.maxSelectableConcepts < 4) {
        this.enableButtons();
      }
      // console.log("count after deselection:"+this.maxSelectableConcepts+this.isSelected);
    }
  }

  disableButtons() {
    this.isSelected.forEach((isSelectedItem, itemIndex) => {
      if (!isSelectedItem) {
        let element = document.getElementById("Concept_" + itemIndex);
        let attr = document.createAttribute("disabled");
        element.attributes.setNamedItem(attr);
      }
    });
  }

  enableButtons() {
    console.log("called enableButtons");
    this.isSelected.forEach((isSelectedItem, itemIndex) => {
      if (!isSelectedItem) {
        let element = document.getElementById("Concept_" + itemIndex).removeAttribute("disabled");

        // let attr = document.createAttribute("disabled");
        // element.attributes.setNamedItem(attr);
      }
    });
  }

  getConceptsFunction() {
    this.testService.getConcepts()
      .subscribe((res: any) => {
        this.concepts = res;
        console.log(this.concepts);
        console.log(this.concepts.length);
        this.toggles = new Array(this.concepts.length).fill(true); //initialize all with true
        this.isSelected = new Array(this.concepts.length).fill(false); //initialize all with false since nothing is selected at firssst
        // console.log(this.concepts[0].Name);
      });

  }
  display() {

    //  this.testService.getQuestions();
    //  this.showTimer = true;
    //  this.showProgressBar = true;
    //  this.questions = this.testService.getQuestions();
    //  console.log(this.testService.getQuestions());
    //  console.log(this.questions);
    this.showTimer = true;
    this.showProgressBar = true;
    this.questions = this.testService.getQuestions();
    this.showNextButton = true;
    this.showQuesButton = false;
    this.questionCounter = 0;
    this.currentQuestion = this.questions[this.questionCounter];
    this.shouldDisplayQuestions = true;
    this.totalQues = this.questions.length;
    this.valueInc = 100 / this.totalQues;

    this.gameClock();
  }

  gameClock() {
    const intervalMain = setInterval(() => {
      this.counter--;
      // console.log("counter:"+this.counter);
      if (this.counter <= 0) {
        this.nextQuestion();
      }
      //this.resetTimer();}
      if (this.quesCount == this.totalQues) {
        clearInterval(intervalMain);
      }

    }, 1000);

  }

  nextQuestion() {

    this.resetTimer();
    console.log(this.selectedOption);
    this.selectedOption = "";
    this.questionCounter++;
    this.currentQuestion = this.questions[this.questionCounter];
    this.value = this.value + this.valueInc;
    if (this.quesCount == this.totalQues) {
      this.showNextButton = false;
      this.callResult = true;
      this.showTimer = false;
      this.showProgressBar = false;
    }
  }

  resetTimer() {
    this.quesCount++;
    this.counter = this.duration;
  }



}

