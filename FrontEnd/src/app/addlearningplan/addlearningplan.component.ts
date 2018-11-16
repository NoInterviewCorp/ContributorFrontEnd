import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addlearningplan',
  templateUrl: './addlearningplan.component.html',
  styleUrls: ['./addlearningplan.component.css']
})
export class AddlearningplanComponent implements OnInit {
  hasClickedAdd:boolean;
  resources: Array<number> = [1];
  lastNumber = this.resources.length;
  constructor() { }

  ngOnInit() {
  }
  addResource() {
    //console.log("clicked");
    this.hasClickedAdd = true;
    this.resources.push(++this.lastNumber);
  }

}
