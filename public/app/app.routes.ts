import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { WeatherComponent } from './weather/weather.component';
import { AboutComponent } from './about/about.component';

const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'data', component: DataComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'about', component: AboutComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
