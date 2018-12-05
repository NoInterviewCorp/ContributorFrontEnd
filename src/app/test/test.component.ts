import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Option } from '../option.model';

// import { Technology } from '../../models/technology.model';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  toggle: any;
  status = 'Enable';
  selectedTech: any;
  questions: any;
  duration = 1000; //timer duration
  counter: number = this.duration;
  i: number = 0;
  questionCounter = 0;

  selectedOption= new Option();
  quesId: string; //for storing the queeesId 
  optionId: string; // for storing the optionId 

  shouldDisplayQuestions = false;
  currentQuestion:any;
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
  selectedConceptArray: any[] = [];
  techName: string;
  subTopicName: string;
  toggles: boolean[];
  isSelected: boolean[];
  maxSelectableConcepts = 0;
  hasSelectedMaxConcepts = false;
  deselectedConcept: string;
  hasSelected4 = false;
  username="xyz";
  constructor(private testService: TestService) { }

  ngOnInit() {
      this.testService.connectionBuilder(this.username).then(() => {
      console.log("Connection Established");
      this.selectedTech = this.testService.getTechName().name;
      console.log(this.selectedTech);
      this.getConceptsFunction(); //get concepts
    });
    // this.getConceptsFunction();
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
      this.selectedConceptArray.push(this.concepts[k].name);
      console.log("selected concepts are:" + this.selectedConceptArray);
      if (this.maxSelectableConcepts >= 4) {
        console.log("dont select more");
        this.hasSelectedMaxConcepts = true;
        this.disableButtons();
        this.hasSelected4 = true;
      }
    }
    else if (this.isSelected[k] == true) {
      this.isSelected[k] = false;
      this.maxSelectableConcepts--;
      this.deselectedConcept = this.concepts[k].name;
      this.selectedConceptArray.splice(this.selectedConceptArray.indexOf(this.deselectedConcept), 1);
      console.log("selected concepts are now:" + this.selectedConceptArray);
      if (this.hasSelectedMaxConcepts && this.maxSelectableConcepts < 4) {
        this.enableButtons();
        this.hasSelected4 = false;
      }
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
    this.isSelected.forEach((isSelectedItem, itemIndex) => {
      if (!isSelectedItem) {
        let element = document.getElementById("Concept_" + itemIndex).removeAttribute("disabled");
      }
    });
  }

  getConceptsFunction() {
    // this.testService.getConcepts(this.username,this.selectedTech);
    this.testService.getConcepts()
    .subscribe((res: any) => {
      console.log(res);
      this.concepts = res;
      this.toggles = new Array(this.concepts.length).fill(true); //initialize all with true
      this.isSelected = new Array(this.concepts.length).fill(false); //initialize all with false since nothing is selected at firssst
    });
    // this.testService.connection.on('messageReceived', (res:any) => {
    // this.concepts = res;
    // this.toggles = new Array(this.concepts.length).fill(true);
    // this.isSelected = new Array(this.concepts.length).fill(false);
    // });

  }

  display() {
    // const conceptNames = this.concepts.map(concept => concept.name);
    // console.log(conceptNames);
    console.log(this.selectedConceptArray);
    // this.testService.getQuestions(this.username, this.selectedTech, conceptNames); //get quess
    this.testService.getQuestions(this.username, this.selectedTech, this.selectedConceptArray); //get quess
    this.showTimer = true;
    this.showProgressBar = true;
    this.selectedTech = this.testService.getTechName().name;
    // this.questions = this.testService.getQuestions(this.username, this.selectedTech,this.concepts);
    this.testService.connection.on('gotQuestions', (ques:any) =>
    {
      this.questions=ques;
      console.log("questions::"+this.questions);

    });
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
      // if (this.counter <= 0) {
      //   this.nextQuestion();
      // }
      if (this.quesCount == this.totalQues) {
        clearInterval(intervalMain);
      }

    }, 1000);

  }

  nextQuestion() {
    // this.resetTimer();
    // this.selectedOption = "";
    this.quesId=this.currentQuestion.Id;
    this.optionId=this.selectedOption.optionId;
    this.testService.evaluateSelectedOption(this.username,this.quesId,this.optionId);
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
}

