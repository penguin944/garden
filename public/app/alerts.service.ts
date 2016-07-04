import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'

export interface Alert {
  message: string;
}

@Injectable()
export class AlertsService {
  private alertTriggeredSubject = new Subject<Alert>();

  public get alerts(){
    return this.alertTriggeredSubject.asObservable();
  }

  public triggerAlert(message: string) {
    this.alertTriggeredSubject.next(<Alert>{ message: message });
  }
}