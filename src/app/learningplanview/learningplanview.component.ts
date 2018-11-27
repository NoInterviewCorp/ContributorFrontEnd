import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';
import { CommunicatorService } from '../services/communicator.service';


@Component({
  selector: 'app-learningplanview',
  templateUrl: './learningplanview.component.html',
  styleUrls: ['./learningplanview.component.css']
})
export class LearningplanviewComponent implements OnInit {
  plan: LearningPlan;
  @Output() hasClickedClearInView = new EventEmitter();
  constructor(private com: CommunicatorService) { }

  ngOnInit() {
    this.plan = this.com.editSelectedPlan;
    console.log(this.plan);
  }
  clickedClearInView() {
    this.hasClickedClearInView.emit(true);
  }

}
