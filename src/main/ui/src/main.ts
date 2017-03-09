import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter } from '@ngrx/router';
import { provideStore, Store } from '@ngrx/store';
import { runEffects } from '@ngrx/effects';
import { routerReducer, connectRouterToStore } from '@ngrx/router-store';

import { MpGardenAppComponent, environment } from './app/';
import { mpRoutes } from './routes';
import { MpMoistureEffects, moistureDataReducer } from './store/';

if(environment.production) {
	enableProdMode();
}

export const storeProvider = provideStore({
	router: routerReducer,
	moisture: moistureDataReducer
});

bootstrap(MpGardenAppComponent, [
	...HTTP_PROVIDERS,
	storeProvider,
	provideRouter(mpRoutes),
	connectRouterToStore(),
	runEffects(MpMoistureEffects),
]);


