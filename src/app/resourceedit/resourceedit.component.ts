import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from 'src/models/resource.model';
import { CommunicatorService } from '../services/communicator.service';

@Component({
  selector: 'app-resourceedit',
  templateUrl: './resourceedit.component.html',
  styleUrls: ['./resourceedit.component.css']
})
export class ResourceeditComponent implements OnInit {
  @Input() resource: Resource;
  @Output() hasClickedClearInResourceEdit = new EventEmitter();
  constructor(private com:CommunicatorService) { }

  ngOnInit() {
  }
  clickedClearInResourceEdit() {
    this.hasClickedClearInResourceEdit.emit(true);
  }
  clickedSave(){
  }
 
}
