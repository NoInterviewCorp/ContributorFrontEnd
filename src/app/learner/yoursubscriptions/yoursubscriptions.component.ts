import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommunicatorService } from 'src/app/services/communicator.service';
@Component({
  selector: 'app-yoursubscriptions',
  templateUrl: './yoursubscriptions.component.html',
  styleUrls: ['./yoursubscriptions.component.css']
})
export class YoursubscriptionsComponent implements OnInit {

  constructor(private http: HttpClient,private com:CommunicatorService) { }

  subs = [];
  ngOnInit() {
    
  //   this.http.get('http://localhost:3000/LearningPlan').subscribe((res: any) => {
  //     this.subs = res;
  //     console.log(this.subs);
  // });
  this.com.getYourSubs().subscribe((res:any)=>{this.subs=res;
  console.log(this.subs)});
  }

}
