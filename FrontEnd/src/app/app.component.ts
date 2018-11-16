import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hasSignedIn = false;
  content = [1, 2, 3, 4]
  title = 'PotentiOMeter';
  handleEvent(event){
    console.log(event);
    this.hasSignedIn  = event;
  }
  constructor() { }
}
