import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {
  //@Input() id: number;
  topicname:string='';
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
