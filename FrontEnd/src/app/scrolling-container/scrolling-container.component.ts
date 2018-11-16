import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scrolling-container',
  templateUrl: './scrolling-container.component.html',
  styleUrls: ['./scrolling-container.component.css']
})
export class ScrollingContainerComponent implements OnInit {

  @Input()header:string='';
  content=[1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit() {
  }

}
