import { Routes } from '@ngrx/router';

import { MpMoistureComponent } from './app/mp-moisture';

export const mpRoutes: Routes = [
	{
		path: '/',
		component: MpMoistureComponent
	},
	{
		path: '/moisture',
		component: MpMoistureComponent,
	}
];
