import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating;
  @Output() onRating = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(rating: number) {
    this.rating = rating;
    this.onRating.emit({ rating });
  } 

}
