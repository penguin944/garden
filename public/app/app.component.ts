import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { COMMON_DIRECTIVES } from "@angular/common";

import { FeedListComponent } from './feeds/feed-list.component';
import { FeedDetailComponent } from './feeds/feed-detail.component';

import { Alert, AlertsService } from './alerts.service';

@Component({
  selector: 'mp-garden',
  template: `
<h1 class='title'>The Pleimanns' - Garden Info</h1>

<nav>
    <a [routerLink]="['/feeds']">Feeds</a>
</nav>

<section *ngIf="alerts.size > 0">
  <div class="alert" *ngFor="let alert of alerts">
    {{alert.message}}
  </div>    
</section>

<router-outlet></router-outlet>
  `,
  directives: [ ROUTER_DIRECTIVES, COMMON_DIRECTIVES ],
  precompile: [ FeedListComponent, FeedDetailComponent ]
})
export class AppComponent {
  public alerts: Array<Alert> = [];

  constructor(alertsService: AlertsService) {
    alertsService.alerts.subscribe((alert: Alert) => this.alerts.push(alert));
  }
}
