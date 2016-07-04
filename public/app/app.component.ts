import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { COMMON_DIRECTIVES, COMMON_PIPES, UpperCasePipe } from "@angular/common";

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';

import { FeedListComponent } from './feeds/feed-list.component';
import { FeedDetailComponent } from './feeds/feed-detail.component';

import { Alert, AlertsService } from './alerts.service';

interface View {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'mp-garden',
  template: `
<header>
	<md-toolbar [color]="'accent'">
	  <md-toolbar-row>{{ title }}</md-toolbar-row>
	  
	  <md-toolbar-row>
      <md-nav-list>
        <button md-button *ngFor="let view of views" [routerLink]="[ view.name ]">
          <md-icon md-list-icon fontIcon="{{ view.icon }}"></md-icon>
          <span>{{ view.name | uppercase }}</span>
          <span>{{ view.description }}</span>
        </button>
      </md-nav-list>
		</md-toolbar-row>
		
		<span class="app-toolbar-filler"></span>
	</md-toolbar>
	<div class="app-content">
    <section>
      <div class="alert" *ngFor="let alert of alerts">
        {{ alert.message }}
      </div>    
    </section>

		<router-outlet></router-outlet>
	</div>
</header>
`,
  pipes: [ COMMON_PIPES, UpperCasePipe ],
  directives: [ ROUTER_DIRECTIVES, COMMON_DIRECTIVES, MD_ICON_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_BUTTON_DIRECTIVES ],
  providers: [ MdIconRegistry ],
  precompile: [ FeedListComponent, FeedDetailComponent ] // required for @angular/router
})
export class AppComponent {
  public alerts: Array<Alert> = [];
  public title: string = "Pleimann - Garden Dashboard";

  public views: View[] = [
    {
      name: 'feeds',
      description: 'Current weather in St. Louis',
      icon: 'receipt'
    },
    // {
    //   name: 'moisture',
    //   description: 'Soil moisture level of garden beds',
    //   icon: 'fa-tint'
    // }
  ];

  constructor(alertsService: AlertsService) {
    alertsService.alerts.subscribe((alert: Alert) => this.alerts.push(alert));
  }
}
