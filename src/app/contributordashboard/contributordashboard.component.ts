import { Component, OnInit, Input } from '@angular/core';
import { MAT_DRAWER_DEFAULT_AUTOSIZE } from '@angular/material';

@Component({
  selector: 'app-contributordashboard',
  templateUrl: './contributordashboard.component.html',
  styleUrls: ['./contributordashboard.component.css']
})
export class contributordashboardComponent implements OnInit {
  LearningPlan: Array<number> = [1, 2, 3, 4, 5];
  hasClickedContributions: boolean;
  hasClickedAddLP: boolean;
  hasClickedViewQuestions: boolean;
  hasClickedRight: boolean;
  hasClickedLeft: boolean;
  constructor() { }

  ngOnInit() {
    this.hasClickedContributions = true;
    this.hasClickedLeft = true;
    this.hasClickedRight = false;
  }


  clickedRight() {
    this.hasClickedRight = true;
    this.hasClickedLeft = false;
  }
  clickedLeft() {
    this.hasClickedRight = false;
    this.hasClickedLeft = true;
  }

  clickedAddLP() {
    this.hasClickedAddLP = true;
    this.hasClickedViewQuestions = false;
    this.hasClickedContributions = false;
  }
  clickedViewQuestions() {
    this.hasClickedViewQuestions = true;
    this.hasClickedAddLP = false;
    this.hasClickedContributions = false;
  }
  clickedContributions() {
    // this.hasClickedresourcecreator = false;
    this.hasClickedAddLP = false;
    this.hasClickedContributions = true;
  }
}
