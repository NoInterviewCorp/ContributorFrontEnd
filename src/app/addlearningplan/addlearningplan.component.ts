import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-addlearningplan',
  templateUrl: './addlearningplan.component.html',
  styleUrls: ['./addlearningplan.component.css']
})
export class AddlearningplanComponent implements OnInit {
  hasClickedAdd:boolean;
  topics: Array<number> = [1];
  lastNumber = this.topics.length;
  topicName:string;

  constructor() { }

  ngOnInit() {
  }
  
  addResource() {
    this.hasClickedAdd = true;
    this.topics.push(++this.lastNumber);
  }
   postLearningPlan(){ 
   }
    
}
