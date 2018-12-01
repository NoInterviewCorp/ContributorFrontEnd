import { Component, OnInit, Input, Inject } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';
// import { Technology } from 'src/models/technology.model';
import { HttpClient } from '@angular/common/http';
import { CommunicatorService } from 'src/app/services/communicator.service';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
 selector: 'app-yoursubscriptionscard',
 templateUrl: './yoursubscriptionscard.component.html',
 styleUrls: ['./yoursubscriptionscard.component.css']
})
export class YoursubscriptionscardComponent implements OnInit {

  @Input() plan: LearningPlan;
 
  constructor(private http:HttpClient,private com:CommunicatorService) { }
 
  ngOnInit() {
 }
  
  animal: string;
  name: string;
 
  sendPlan() {
   this.com.selectedLearningPlan=this.plan;
   console.log(this.com.selectedLearningPlan);
}
}

