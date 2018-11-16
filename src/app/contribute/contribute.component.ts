import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  content=[1,2,3,4,5,6,7,8,9];

  // yourContributions = "Your Contributions";
  constructor() { }

  ngOnInit() {
  }

}
