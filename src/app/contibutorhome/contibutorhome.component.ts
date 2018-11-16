import { Component, OnInit, Input } from '@angular/core';
import { MAT_DRAWER_DEFAULT_AUTOSIZE } from '@angular/material';

@Component({
  selector: 'app-contibutorhome',
  templateUrl: './contibutorhome.component.html',
  styleUrls: ['./contibutorhome.component.css']
})
export class ContibutorhomeComponent implements OnInit {
  LearningPlan: Array<number> = [1,2,3,4,5];
  hasClickedContributions:boolean;
  hasClickedAddLP:boolean;
  hasClickedAddResource:boolean;
  hasClickedRight:boolean;
  hasClickedLeft:boolean;
  constructor() { }

  ngOnInit() {
    this.hasClickedContributions=true;
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
  
  clickedAddLP(){
     this.hasClickedAddLP=true;
     this.hasClickedAddResource=false;
     this.hasClickedContributions=false;
  }
  clickedAddResource(){
     this.hasClickedAddResource=true;
     this.hasClickedAddLP=false;
     this.hasClickedContributions=false;
  }
  clickedContributions(){
    this.hasClickedAddResource=false;
    this.hasClickedAddLP=false;
    this.hasClickedContributions=true;
 }
}