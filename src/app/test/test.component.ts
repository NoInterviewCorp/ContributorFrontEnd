import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Technology } from '../technology.model';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

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

  techName: string; subTopicName: string;


  constructor(private testService: TestService) { }

  ngOnInit() {
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
      //this.score+=this.counter*2;
      this.quesCount++;
      this.counter = this.duration;
    }

  }

