import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommunicatorService } from '../services/communicator.service';
import { LearningPlan } from 'src/models/learningplan.model';

@Component({
  selector: 'app-editlearningplan',
  templateUrl: './editlearningplan.component.html',
  styleUrls: ['./editlearningplan.component.css']
})
export class EditlearningplanComponent implements OnInit {
plan: LearningPlan[];
  constructor(private com:CommunicatorService,private http:HttpClient) { }

  ngOnInit() {
    this.getPlanToEdit();
  }
  getPlanToEdit(){
    // this.com.getPlansById().subscribe((res:any)=>{
    //   this.plan=res;
    //  console.log(res);
    // });
  }

}
