import {
	beforeEach,
	beforeEachProviders,
	describe,
	expect,
	inject,
	it,
} from '@angular/core/testing';

import { provide } from '@angular/core';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { MOCK_EFFECTS_PROVIDERS, MockStateUpdates } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';

import { MpMoistureEffects } from './effects';

describe('Garden Action Effects', function () {
	beforeEachProviders(() => [
		BaseRequestOptions,
		MockBackend,
		MOCK_EFFECTS_PROVIDERS,
		provide(Http, {
			useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
				return new Http(backend, defaultOptions);
			},
			deps: [ MockBackend, BaseRequestOptions ]
		})
	]);

	beforeEach(inject([ MockBackend ], (backend: MockBackend) => {
		const baseResponse = new Response(new ResponseOptions({
			body: '{}',
			status: 200,
			statusText: 'OK'
		}));
		backend.connections.subscribe((connection: MockConnection) =>
			connection.mockRespond(baseResponse)
		);
	}));

	it('should respond with latest data',
		inject([ MockStateUpdates, MpMoistureEffects ], (updates: MockStateUpdates, moisture: MpMoistureEffects) => {
		moisture.data$.subscribe((action: Action) => {
				expect(action.type).toBe('GET_MOISTURE_DATA_SUCCESS');
			});
		})
	);
});
