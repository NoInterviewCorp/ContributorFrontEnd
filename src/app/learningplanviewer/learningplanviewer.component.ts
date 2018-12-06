import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';
import { CommunicatorService } from '../services/communicator.service';
import { BloomTaxonomy } from '../bloomTaxonomy.model';


@Component({
  selector: 'app-learningplanviewer',
  templateUrl: './learningplanviewer.component.html',
  styleUrls: ['./learningplanviewer.component.css']
})
export class learningplanviewerComponent implements OnInit {
  plan: LearningPlan;
  displayBloom(bloomLevel){
    return BloomTaxonomy[bloomLevel];
  }
  // @Output() hasClickedClearInView = new EventEmitter();
  constructor(private com: CommunicatorService) { }

  ngOnInit() {
    this.plan = this.com.editSelectedPlan;
    console.log(this.plan);
    
  }
}
