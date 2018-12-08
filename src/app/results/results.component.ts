import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../../models/userdata.model';
import { AttemptedConcept } from "../../models/attemptedconcept.model";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      console.log(params["user"]);
      this.userdata = JSON.parse(params["user"]);
    });
  }

  userdata: UserData;
  techName: string;
  name:string;
  conceptsAttempted: AttemptedConcept[];
  quesAttempted: number;
  
 
  ngOnInit() {
    this.name=this.userdata.username;
    this.conceptsAttempted=this.userdata.data.conceptsAttempted;
    console.log(this.conceptsAttempted);
    console.log("inside results!:" + this.userdata.username);
    console.log(this.userdata);
    this.techName=this.userdata.data.techName;
    console.log("techname is:"+this.techName);
  }


}