import { Component, OnInit, Input } from '@angular/core';
import { LearningPlan } from 'src/models/learningplan.model';
import { CommunicatorService } from '../services/communicator.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scrolling-container',
  templateUrl: './scrolling-container.component.html',
  styleUrls: ['./scrolling-container.component.css']
})
export class ScrollingContainerComponent implements OnInit {
  plan: LearningPlan[];
  contributions: LearningPlan[];
  hasClickedEditLP: boolean;
  hasClickedViewLP: boolean;
  hasClickedSaveChangesInEdit: boolean;
  hasClickedClearEdit: boolean;
  hasClickedClearView: boolean;
  @Input() choice: number;
  constructor(private com: CommunicatorService, private http: HttpClient) { }

  ngOnInit() {
    this.getPlans();
  }
  getPlans() {
    switch (this.choice) {
      // case 1: {
      //   this.com.getContributions().subscribe((res: any) => {
      //     this.plan = res;
      //     console.log(res);
      //   });
      //   break;
      // }
      case 2: {
        this.com.getSubscriptions().subscribe((res: any) => {
          this.plan = res;
          console.log(res);
        });
        break;
      }
      // case 3: {
      //   this.com.getPopularPlans().subscribe((res: any) => {
      //     this.plan = res;
      //     console.log(res);
      //   });
      //   break;
      // }
      default: {
        break;
      }
    }

  }
  handleEdit(edit) {
    this.hasClickedEditLP = edit;
    this.hasClickedSaveChangesInEdit = false;
    this.hasClickedClearEdit = false;
    this.hasClickedViewLP= false;
  }
  handleView(view) {
    this.hasClickedViewLP = view;
    this.hasClickedClearView = false;
    this.hasClickedEditLP=false;
  }
  handleSaveEdit(savechanges) {
    this.hasClickedSaveChangesInEdit = savechanges;
    this.hasClickedViewLP = false;
    this.hasClickedEditLP = false;
  }
  handleClearEdit(clear) {
    this.hasClickedClearEdit = clear;
    this.hasClickedEditLP = false;
    this.hasClickedViewLP = false;
  }
  handleClearView(clear) {
    this.hasClickedClearView = clear;
    this.hasClickedViewLP = false;
    this.hasClickedEditLP = false;
  }
}
