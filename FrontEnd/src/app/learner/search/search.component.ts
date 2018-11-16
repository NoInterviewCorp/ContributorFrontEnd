import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.hasClickedSearch = true;
  }

  noToggle() {
    this.popularPlans = this.prefixPopularPlans + this.selectedTech;
    this.isNoSelected = true;
    this.hasClickedSearch = false;
    this.showSearch = false;
    console.log(this.popularPlans);
  }

}
