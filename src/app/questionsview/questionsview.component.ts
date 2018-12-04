import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/models/resource.model';
import { CommunicatorService } from '../services/communicator.service';

@Component({
  selector: 'app-questionsview',
  templateUrl: './questionsview.component.html',
  styleUrls: ['./questionsview.component.css']
})
export class QuestionsviewComponent implements OnInit {
  resources: any;
  userId="4321";
  constructor(private com:CommunicatorService) { }

  ngOnInit() {
    this.getresources();
  }

getresources(){
this.com.getResourceById(this.userId).subscribe(res => {
  // console.log("result is  " + res);
  this.resources=res;
});
}

}
