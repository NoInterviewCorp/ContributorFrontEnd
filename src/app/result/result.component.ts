import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public colors = ['red', 'green', 'blue']
public  dataColumns = [3]; // Single Bar Chart
// public  dataColumns = [3]; // Stacked Bar Chart
// public  dataColumns = [2, 1]; // Multi Stacked Bar Chart
public  barChartData = [{
    id: 0,
    label: 'label1',
    value1: 10,
    value2: 10,
    value3: 10,
 },{
    id: 1,
    label: 'label2',
    value1: 10,
    value2: 10,
    value3: 10,
 }]

 }
