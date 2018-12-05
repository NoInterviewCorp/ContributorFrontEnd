import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/models/resource.model';
import { CommunicatorService } from '../services/communicator.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-questionsview',
  templateUrl: './questionsview.component.html',
  styleUrls: ['./questionsview.component.css']
})
export class QuestionsviewComponent implements OnInit {
  id:number;
  resource:Resource;
  questions:Question[];
  constructor(private com:CommunicatorService) { }

  ngOnInit() {
    this.resource=this.com.editSelectedResource;
    this.questions=this.resource.questions;
  }



}
