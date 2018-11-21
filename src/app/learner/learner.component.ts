import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.css']
})
export class LearnerComponent implements OnInit {

  constructor() { }

  hasClickedTech : boolean;
  hasClickedSubs : boolean;
  hasClickedLearn : boolean;
  hasClickedRight : boolean;
  hasClickedLeft : boolean;

  ngOnInit() {
    this.hasClickedTech=true;
    this.hasClickedLeft=true;
    this.hasClickedRight=false;
  }

  clickedRight(){
    this.hasClickedRight=true;
    this.hasClickedLeft=false;
  }
  clickedLeft(){
    this.hasClickedRight=false;
    this.hasClickedLeft=true;
  }
  clickedTech() {
    this.hasClickedTech=true;
    this.hasClickedSubs=false;
    this.hasClickedLearn=false;
  }

  clickedSubs() {
    this.hasClickedTech=false;
    this.hasClickedSubs=true;
    this.hasClickedLearn=false;
  }
  
  clickedLearn() {
    this.hasClickedTech=false;
    this.hasClickedSubs=false;
    this.hasClickedLearn=true;
  }

}
