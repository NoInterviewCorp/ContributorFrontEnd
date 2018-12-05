import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from 'src/models/resource.model';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resourcecard',
  templateUrl: './resourcecard.component.html',
  styleUrls: ['./resourcecard.component.css']
})
export class ResourcecardComponent implements OnInit {
  @Input() resource: Resource;
  // @Output() hasClickedEdit=new EventEmitter();
  @Output() hasClickedViewQuestions=new EventEmitter(); 

  constructor(private com:CommunicatorService,private http:HttpClient) {
  }
  ngOnInit() {
    console.log(this.resource.resourceId);
  }
  viewQuestions(){
      this.com.editSelectedResource=this.resource;
      this.hasClickedViewQuestions.emit(true);
  }
  

}
