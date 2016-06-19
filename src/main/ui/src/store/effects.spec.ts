import { ReflectiveInjector } from '@angular/core/testing';
import {
	MOCK_EFFECTS_PROVIDERS,
	MockStateUpdates
} from '@ngrx/effects/testing';

import { MpMoistureEffects } from './effects';

describe('Auth Effects', function() {
	let moisture: MpMoistureEffects;
	let updates$: MockStateUpdates;

	beforeEach(function() {
		const injector = ReflectiveInjector.resolveAndCreate([
			MpMoistureEffects,
			MOCK_EFFECTS_PROVIDERS,
			// Mock out other dependencies (like Http) here
		]);

		moisture = injector.get(MpMoistureEffects);
		updates$ = injector.get(MockStateUpdates);
	});

	it('should respond with latest data', function() {
		// Add an action in the updates queue
		updates$.sendAction({ type: 'GET_MOISTURE_DATA', payload: { feedId: 'garden-moisture-bed1' } });

		moisture.data$.subscribe(function(action) {
			/* assert here */
		});
	});
});
