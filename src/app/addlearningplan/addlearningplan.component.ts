import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/models/resource.model';
import { CommunicatorService } from '../services/communicator.service';


@Component({
  selector: 'app-addlearningplan',
  templateUrl: './addlearningplan.component.html',
  styleUrls: ['./addlearningplan.component.css']
})
export class AddlearningplanComponent implements OnInit {
  // hasClickedAdd:boolean;
  // topics: Array<number> = [1];
  // lastNumber = this.topics.length;
  // topicName:string;
  hasClickedAddResource:boolean;
  hasClickedSaveResource:boolean;
  resource:Resource;
  resources:Resource[]=[];
  hasClickedAddQuestions:boolean;
  constructor(private com:CommunicatorService) { }

  ngOnInit() {
  }
  handleSave(save:boolean){
    this.hasClickedSaveResource=save;
    console.log(this.hasClickedSaveResource);
    this.resource=this.com.addResource
    console.log(this.resource);
    this.resources.push(this.resource)
  }
  
  // addResource() {
  //   this.hasClickedAdd = true;
  //   this.topics.push(++this.lastNumber);
  // }
   postLearningPlan(){ 
   }
   clickedAddResource(){
     this.hasClickedAddResource=true;
     this.hasClickedSaveResource=false;
   }
   clickedAddQuestions(){
     this.hasClickedAddQuestions=true;
   }
    
}
