import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-entity-component',
  templateUrl: './add-entity-component.component.html',
  styleUrls: ['./add-entity-component.component.css']
})
export class AddEntityComponentComponent implements OnInit {

  @Input() displayString
  constructor() { }

  ngOnInit() {
  }

}
