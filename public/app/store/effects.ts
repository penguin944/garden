import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/map';
import 'rxjs/add/observable/switchMap';

import { Action } from '@ngrx/store';
import { StateUpdates, StateUpdate, Effect } from '@ngrx/effects';

import { GET_MOISTURE_DATA, GET_MOISTURE_DATA_SUCCESS, GET_MOISTURE_DATA_FAILED } from './reducer';

@Injectable()
export class MpMoistureEffects {
	constructor(private http: Http, private updates$: StateUpdates<any>) { }

	@Effect()
	public data$ = this.updates$
		.whenAction(GET_MOISTURE_DATA)
		.map((update: StateUpdate<any>)  => JSON.stringify(update.action.payload))
		.switchMap((payload: any) => this.http.post('/api/moisture', payload)
			.map((res: Response) => ({ type: 'GET_MOISTURE_DATA_SUCCESS', payload: res.json() }))
			.catch(() => Observable.of({ type: 'GET_MOISTURE_DATA_FAILED' }))
		);
}
