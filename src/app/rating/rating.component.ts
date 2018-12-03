import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CommunicatorService } from '../services/communicator.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating;
  @Output() onRating = new EventEmitter();
  constructor(private com:CommunicatorService) { }

  ngOnInit() {
  }

  onClick(rating: number) {
    this.rating = rating;
    this.com.setRating(this.rating);
    this.onRating.emit({ rating });
  }    

}
