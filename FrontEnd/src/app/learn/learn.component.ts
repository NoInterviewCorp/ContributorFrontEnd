import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  yourSubscriptions = "Your Subscriptions";
  trendingPlans = "Trending Plans";
  constructor() { }
  ngOnInit() {
  }
}
