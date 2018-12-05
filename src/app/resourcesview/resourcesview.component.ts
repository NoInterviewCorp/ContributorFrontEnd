import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from '../services/communicator.service';

@Component({
  selector: 'app-resourcesview',
  templateUrl: './resourcesview.component.html',
  styleUrls: ['./resourcesview.component.css']
})
export class ResourcesviewComponent implements OnInit {
  resources: any;
  userId = "4321";
  hasClickedView:boolean;
  constructor(private com: CommunicatorService) { }

  ngOnInit() {
    this.getresources();
  }

  getresources() {
    this.com.getResourceById(this.userId).subscribe(res => {
      // console.log("result is  " + res);
      this.resources = res;
    });
  }

  handleView(view){
    console.log("has clicked view");
    this.hasClickedView=view;
  }
  
}
