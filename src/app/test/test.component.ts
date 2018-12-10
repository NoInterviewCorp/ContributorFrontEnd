import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Option } from '../option.model';
import { LearningPlanFeedBack } from 'src/models/learningplanfeedback.model';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Question } from '../question.model';
import { UserData } from '../../models/userdata.model';
import { UserWrapper } from 'src/models/userprofile.model';
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
  questions: Question[] = [];
  duration = 15; //timer duration
  counter: number = this.duration;
  i: number = 0;
  questionCounter = 0;

  selectedOption = new Option();
  quesId: string; //for storing the queeesId
  optionId: number; // for storing the optionId
  user: UserWrapper = new UserWrapper();
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
  userdata: UserData;
  gameover = false;
  // End Of New Properties

  constructor(private testService: TestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.domain = this.route.snapshot.paramMap.get('domain');
    this.concepts = this.route.snapshot.paramMap.get('concepts').split(',');
    this.isLoaderActivated = true;
    this.testService.connectionBuilder(this.user.userId).then(() => {
      console.log("Connection Established");
      this.display();
    });

    this.testService.connection.on('Quiz Over', (user: any) => {
      this.gameover = true;
      this.userdata = user;
      let options: NavigationExtras = {
        queryParams: {
          "user": JSON.stringify(this.userdata)
        }
      }
      this.router.navigate(['/results'], options);
      console.log(user);
    })
  }

  display() {

    this.testService.getQuestions(this.user.userId, this.domain, this.concepts); //get quess
    this.showTimer = true;
    this.showProgressBar = true;
    this.selectedTech = this.domain;
    this.testService.connection.on('GetQuestion', (ques: any) => {
      console.log("Getting Questions");
      this.isLoaderActivated = false;
      this.questions = ques;
      console.log(this.questions[0].problemStatement);
      console.log(this.questions[0].options[0]);
      this.questionCounter = 0;
      this.currentQuestion = this.questions[this.questionCounter];
      this.showNextButton = true;
      this.showQuesButton = false;
      this.shouldDisplayQuestions = true;
      this.totalQues = this.questions.length;
      console.log("total ques are :: " + this.totalQues);
      this.valueInc = 100 / this.totalQues;
      this.gameClock();
    });

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
    this.quesId = this.currentQuestion.questionId;
    this.optionId = this.selectedOption.optionId;
    console.log("option id is::" + this.optionId + "question id::" + this.quesId);
    this.testService.evaluateSelectedOption(this.user.userId, this.quesId, this.optionId);
    this.quesCount++;
    this.currentQuestion = this.questions[this.quesCount];
    this.value = this.value + this.valueInc;
    console.log("ques count::" + this.quesCount + "   total::" + this.totalQues);
    if (this.quesCount == this.totalQues) {
      this.showNextButton = false;
      this.callResult = true;
      this.showTimer = false;
      this.showProgressBar = false;
      this.gameover = true;
      this.testService.connection.send('EndQuiz', this.user.userId);

    }
  }
}