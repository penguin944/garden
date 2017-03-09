import { Component, OnInit } from '@angular/core';

import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';

@Component({
  selector: 'app-moisture-chart',
  templateUrl: 'app/moisture-chart/moisture-chart.component.html',
  styleUrls: [ 'app/moisture-chart/moisture-chart.component.css' ],
  directives: [ MD_TABS_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_ICON_DIRECTIVES ]
})
export class MoistureChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}
