import { Component, OnInit } from '@angular/core';
import { COMMON_PIPES, COMMON_DIRECTIVES } from "@angular/common";
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Observable } from 'rxjs';

import { Feed, Reading, FeedsService } from './feeds.service';

@Component({
  selector: 'mp-garden-feeds',
  template: `
<table>
    <thead>
        <tr><th>Id</th><th>Name</th></tr>
    </thead>
    <tr *ngFor="let feed of feeds | async">
        <td>{{ feed.id }}</td>
        <td><a [routerLink]="['/feeds', feed.name]">{{ feed.name }}</a></td>
    </tr>
</table>        
    `,
  providers: [ FeedsService ],
  directives: [ COMMON_DIRECTIVES, ROUTER_DIRECTIVES ],
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