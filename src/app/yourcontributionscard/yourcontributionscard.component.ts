import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yourcontributionscard',
  templateUrl: './yourcontributionscard.component.html',
  styleUrls: ['./yourcontributionscard.component.css']
})
export class YourcontributionscardComponent implements OnInit {
  @Input() plan: LearningPlan;
  id:any;
  // learnigPlanId:any;
  @Output() hasClickedEdit=new EventEmitter();
  @Output() hasClickedView=new EventEmitter(); 

  constructor(private com:CommunicatorService,private http:HttpClient,private router:Router) {
  }
  ngOnInit() {
    console.log(this.plan.learningPlanId);
  }
  getPlanOfId(){
      this.com.editSelectedPlan=this.plan;
      this.hasClickedEdit.emit(true);
      this.router.navigate([`/learningplanedit/${this.plan}`,{id:this.plan.learningPlanId}]);
  }
  viewPlanOfId(){
    this.com.editSelectedPlan=this.plan;
    this.hasClickedView.emit(true);
  }

}
