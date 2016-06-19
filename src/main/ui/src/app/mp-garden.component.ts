import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { ROUTER_DIRECTIVES } from '@ngrx/router';

import { MpMoistureComponent } from './mp-moisture/';

interface View {
	name: string;
	description: string;
	icon: string;
}

@Component({
	moduleId: module.id,
	selector: 'garden-app',
	directives: [
		MD_CARD_DIRECTIVES,
		MD_BUTTON_DIRECTIVES,
		MD_LIST_DIRECTIVES,
		MD_ICON_DIRECTIVES,
		MD_TOOLBAR_DIRECTIVES,
		ROUTER_DIRECTIVES,
		MpMoistureComponent
	],
	pipes: [ UpperCasePipe ],
	providers: [ MdIconRegistry ],
	template: `
<header>
	<md-toolbar color="primary">
		{{ title }}
		<md-nav-list>
			<button md-button *ngFor="let view of views" [linkTo]="view.name">
				<md-icon md-list-icon fontSet="fa" fontIcon="{{view.icon}}"></md-icon>
				<span>{{view.name | upperCase}}</span>
				<span>{{view.description}}</span>
			</button>
		</md-nav-list>
		<span class="app-toolbar-filler"></span>
	</md-toolbar>
	<div class="app-content">
		<route-view></route-view>
	</div>
</header>`,
	styles: []
})
export class MpGardenAppComponent {
	public title = 'PleimaGarden Dashboard';

	public views: View[] = [
		{
			name: 'weather',
			description: 'Current weather in St. Louis',
			icon: 'fa-cloud'
		},
		{
			name: 'moisture',
			description: 'Soil moisture level of garden beds',
			icon: 'fa-tint'
		}
	];
}
