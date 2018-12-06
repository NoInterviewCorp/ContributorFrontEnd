import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from '../services/communicator.service';
import { UserWrapper } from 'src/models/userprofile.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.css']
})
export class LearnerComponent implements OnInit {
user:UserWrapper;
res:any;
  constructor(private com:CommunicatorService) {
    this.user=new UserWrapper;
   }

  hasClickedTech: boolean;
  hasClickedSubs: boolean;
  hasClickedLearn: boolean;
  hasClickedRight: boolean;
  hasClickedLeft: boolean;

  ngOnInit() {
    this.postUserId();
    this.hasClickedTech = true;
    this.hasClickedLeft = true;
    this.hasClickedRight = false;
  }

  postUserId(){
    
    this.com.postUser(this.user).subscribe(res=>{
     
      this.res=res;
      console.log(res);
    })
    this.user=this.res;
  }
  clickedRight() {
    this.hasClickedRight = true;
    this.hasClickedLeft = false;
  }
  clickedLeft() {
    this.hasClickedRight = false;
    this.hasClickedLeft = true;
  }
  clickedTech() {
    this.hasClickedTech = true;
    this.hasClickedSubs = false;
    this.hasClickedLearn = false;
  }

  clickedSubs() {
    this.hasClickedTech = false;
    this.hasClickedSubs = true;
    this.hasClickedLearn = false;
  }

  clickedLearn() {
    this.hasClickedTech = false;
    this.hasClickedSubs = false;
    this.hasClickedLearn = true;
  }

}
