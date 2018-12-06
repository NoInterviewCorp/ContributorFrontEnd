import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Option } from '../option.model';
import { LearningPlanFeedBack } from 'src/models/learningplanfeedback.model';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question.model';
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
 questions: Question[]=[];
 duration = 1000; //timer duration
 counter: number = this.duration;
 i: number = 0;
 questionCounter = 0;

 selectedOption = new Option();
 quesId: string; //for storing the queeesId
 optionId: number; // for storing the optionId

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
 selectedConceptArray: any[] = [];
 techName: string;
 subTopicName: string;
 toggles: boolean[];
 isSelected: boolean[];
 maxSelectableConcepts = 0;
 hasSelectedMaxConcepts = false;
 deselectedConcept: string;
 hasSelected4 = false;

// New Properties
 isLoaderActivated: boolean;
 domain: string;
// End Of New Properties

 constructor(private testService: TestService, private route: ActivatedRoute) { }

 ngOnInit() {
   this.domain = this.route.snapshot.paramMap.get('domain');
   this.concepts = this.route.snapshot.paramMap.get('concepts').split(',');
   this.isLoaderActivated = true;
   this.testService.connectionBuilder('4321').then(() => {
     console.log("Connection Established");
     this.display();
   });
 }

 display() {

   this.testService.getQuestions('4321', this.domain, this.concepts); //get quess
   this.showTimer = true;
   this.showProgressBar = true;
   this.testService.connection.on('GetQuestion', (ques: any) => {
     console.log("Getting Questions");
     this.isLoaderActivated = false;
     this.questions = ques;
     console.log(this.questions[0].problemStatement);
     console.log(this.questions[0].options[0]);
     this.questionCounter=0;
      this.currentQuestion = this.questions[this.questionCounter];
   });
   this.showNextButton = true;
   this.showQuesButton = false;
   this.shouldDisplayQuestions = true;
   this.totalQues = this.questions.length;
   this.valueInc = 100 / this.totalQues;
   this.gameClock();
 }

 gameClock() {
   const intervalMain = setInterval(() => {
     // console.log(this.counter);
     this.counter--;
     // if (this.counter <= 0) {
     //   this.nextQuestion();
     // }
     // if (this.quesCount == this.totalQues) {
     //   clearInterval(intervalMain);
     // }

   }, 1000);

 }

 nextQuestion() {
   // this.resetTimer();
   // this.selectedOption = "";
   this.quesId = this.currentQuestion.Id;
   this.optionId = this.selectedOption.optionId;
   this.testService.evaluateSelectedOption('4321', this.quesId, this.optionId);
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