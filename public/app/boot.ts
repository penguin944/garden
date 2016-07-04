import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ExceptionHandler } from '@angular/core';

import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import { AppExceptionHandler } from './exception-handler';
import { AlertsService } from './alerts.service';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  { provide: ExceptionHandler, useClass: AppExceptionHandler },
  { provide: AlertsService, useClass: AlertsService }
])
  .catch(err => console.error(err));