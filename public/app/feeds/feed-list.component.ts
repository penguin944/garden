import { Component, OnInit } from '@angular/core';
import { COMMON_PIPES, COMMON_DIRECTIVES } from "@angular/common";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from "@angular2-material/card";
import { MD_ICON_DIRECTIVES } from "@angular2-material/icon";

import { Observable } from 'rxjs';

import { Feed, FeedsService } from './feeds.service';

@Component({
  selector: 'mp-garden-feeds',
  template: `
<md-list *ngFor="let feed of feeds | async">
   <md-list-item>
    <h3 md-line><a [routerLink]="['/feeds', feed.name]"><md-icon>receipt</md-icon>{{ feed.name }}</a></h3>
    <p md-line>Last Value: {{ feed.last_value }}</p>
   </md-list-item>
</md-list>
`,
  providers: [ FeedsService ],
  directives: [ COMMON_DIRECTIVES, ROUTER_DIRECTIVES, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MD_ICON_DIRECTIVES ],
  pipes: [ COMMON_PIPES ]
})
export class FeedListComponent implements OnInit {
  public feeds: Observable<Feed[]>;

  constructor(private feedService: FeedsService) {
  }

  ngOnInit() {
    this.feeds = this.feedService.all()
  }
}