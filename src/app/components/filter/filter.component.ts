import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 10000;
  min = 0;
  showTicks = false;
  step = 100;
  thumbLabel = false;
  value = 0;
  vertical = false;

  constructor() { }

  formatLabel(value: number) {
    //if (value >= 1000) {
     // return Math.round(value / 1000) + 'k';
    //}

    return value;
  }

  ngOnInit(): void {
  }

}
