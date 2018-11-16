import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contibutorhome',
  templateUrl: './contibutorhome.component.html',
  styleUrls: ['./contibutorhome.component.css']
})
export class ContibutorhomeComponent implements OnInit {
  LearningPlan: Array<number> = [1,2,3,4,5];
  constructor() { }

  ngOnInit() {
  }

}
