import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/technology.model';
import { HttpClient } from '@angular/common/http';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedTech: string = '';
  prefixPopularPlans = "Popular Learning Plans for ";
  popularPlans: string = '';
  hasClickedSearch = false;
  isNoSelected = false;
  showSearch = true;
  LearningPlan: Array<number> = [1, 2, 3, 4, 5];
  technology=[];
  showBtn=true;

  showTech = true;
  ask=false;
  showPopular = false;


  constructor(private testService: TestService,private http: HttpClient ) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/Technology').subscribe((res: any) => {
      this.technology = res;
      console.log(this.technology);
  });

  }


  // search() {
  //   this.hasClickedSearch = true;
  //   this.showSearch = false;
  // }

  noToggle(t:Technology) {
    this.setTech(t);
    this.popularPlans = this.prefixPopularPlans + this.selectedTech;
    console.log("selected tech for learning:"+this.selectedTech);
    this.isNoSelected = true;
    this.hasClickedSearch = false;
    // this.showSearch = false;
    this.showPopular = true;
    this.ask=false;
    
    // console.log("called noToggle");
  }

  setTech(t:Technology) {
    this.testService.setTechName(t);
    let x  = this.testService.getTechName();
    // console.log("techname:"+x.Name);
    // console.log(x.Questions);
    this.selectedTech=t.Name;
    this.ask=true;
    this.showPopular = false;
  }
 
//   showTechs() {
//     this.http.get('http://localhost:3000/Technology').subscribe((res: any) => {
//       this.technology = res;
//       console.log(this.technology);
//   });
//   this.showBtn=false;
// }
}