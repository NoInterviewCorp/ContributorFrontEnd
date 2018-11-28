import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from 'src/models/resource.model';

@Component({
  selector: 'app-resourceedit',
  templateUrl: './resourceedit.component.html',
  styleUrls: ['./resourceedit.component.css']
})
export class ResourceeditComponent implements OnInit {
@Input() resource:Resource;
@Output() hasClickedClearInResourceEdit=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  clickedClearInResourceEdit(){
this.hasClickedClearInResourceEdit.emit(true);
  }
}
