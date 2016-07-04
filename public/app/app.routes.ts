import { provideRouter, RouterConfig } from '@angular/router';

import { FeedsRoutes } from './feeds/feeds.routes';

export const routes: RouterConfig = [
    { path: '', redirectTo: '/feeds', pathMatch: 'full' },

    ...FeedsRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
