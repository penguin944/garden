import { Component, ViewEncapsulation } from '@angular/core';
import { NgFor, UpperCasePipe, AsyncPipe } from '@angular/common';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/first';

import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TABS_DIRECTIVES, MdTabChangeEvent } from '@angular2-material/tabs';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';

import './about/about.component';
import './data/data.component';
import './home/home.component';
import './moisture-chart/moisture-chart.component';
import './weather/weather.component';

interface Page {
  name: string;
  link: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styleUrls: [ 'app/app.component.css' ],
  directives: [
    NgFor,
    ROUTER_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_TABS_DIRECTIVES
  ],
  providers: [ MdIconRegistry ],
  pipes: [ UpperCasePipe, AsyncPipe ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  private toolbarColor: string = 'primary';
  private pages: Observable<Page[]> = Observable.of([
    {
      name: 'HOME',
      link: '/home'
    }, {
      name: 'DATA',
      link: '/data'
    }, {
      name: 'WEATHER',
      link: '/weather'
    }, {
      name: 'ABOUT',
      link: '/about'
    }
  ]);

  constructor(private router: Router) { }

  public selectTab(event: MdTabChangeEvent) {
    this.pages.map((pages: Page[]) => pages.filter((pages, index) => index === event.index)[0])
      .subscribe((page: Page) => this.router.navigateByUrl(page.link));
  }
}
