import { Inject, Injector, ApplicationRef, ExceptionHandler, WrappedException, BaseException } from '@angular/core';

import { AlertsService } from './alerts.service';

export class AppExceptionHandler extends ExceptionHandler {
  private applicationRef: ApplicationRef;

  constructor(@Inject(AlertsService) private alertsService: AlertsService, @Inject(Injector) injector: Injector) {
    super(null, false);

    setTimeout(() => this.applicationRef = injector.get(ApplicationRef));
  }

  call(exception: BaseException, stackTrace?: any, reason?: string) {
    var extractedException = this.extractMessage(exception);

    this.alertsService.triggerAlert(ExceptionHandler.exceptionToString(extractedException, stackTrace, reason));

    if(this.applicationRef){
      this.applicationRef.tick();
    }
  }

  private extractMessage(exception: any): string {
    return exception instanceof WrappedException ? exception.wrapperMessage :
      exception.toString();
  }
}
