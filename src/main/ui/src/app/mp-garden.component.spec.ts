import {
	beforeEachProviders,
	describe,
	expect,
	it,
	inject
} from '@angular/core/testing';
import {MpGardenAppComponent} from './mp-garden.component';

beforeEachProviders(() => [MpGardenAppComponent]);

describe('App: Garden', () => {
	it('should create the app', inject([MpGardenAppComponent], (app: MpGardenAppComponent) => {
		expect(app).toBeTruthy();
	}));

	it('should have as title \'garden works!\'', inject([MpGardenAppComponent], (app: MpGardenAppComponent) => {
		expect(app.title).toEqual('PleimaGarden Dashboard');
	}));
});
