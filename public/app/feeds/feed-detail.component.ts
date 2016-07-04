import { Component, OnInit } from '@angular/core';
import { COMMON_DIRECTIVES, COMMON_PIPES, JsonPipe } from '@angular/common';
import { MD_CARD_DIRECTIVES } from "@angular2-material/card";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';

import { Feed, FeedsService } from './feeds.service';

@Component({
  selector: 'mp-garden-feed',
  template: `
  <md-card *ngIf="feed | async">
    <md-card-title>{{ (feed | async)?.name }}</md-card-title>   
    <md-card-subtitle>Last Value: {{ (feed | async)?.last_value }}</md-card-subtitle>
    <md-card-content>
      
    </md-card-content>
  </md-card>
  <!--<tr *ngFor="let reading of (feed | async)?.readings">
      <td>{{ reading.id }}</td>
      <td>{{ reading.value }}%</td>
      <td>{{ reading.created_at | date:'MM/dd/y HH:mm:ss' }} CDT</td>
  </tr>-->
  <base-chart class="chart"
      [data]="readingData"
      [chartType]="'line'"></base-chart>
`,
  providers: [ FeedsService ],
  directives: [ COMMON_DIRECTIVES, MD_CARD_DIRECTIVES, CHART_DIRECTIVES ],
  pipes: [ COMMON_PIPES, JsonPipe ]
})
export class FeedDetailComponent implements OnInit {
  public feed: Observable<Feed>;
  public readingData: number[] = [ 1, 2, 3, 4 ];

  constructor(private feedsService: FeedsService, private route: ActivatedRoute){
  }

  ngOnInit(): any {
    this.route.params.subscribe((params: {}) => {
      const name = params['name'];

      this.feed = this.feedsService.details(name);
    });
  }
}