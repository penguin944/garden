import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Rx";

import { Feed, Reading, FeedsService } from './feeds.service';

@Component({
  selector: 'mp-garden-feed',
  template: `
<table>
    <thead>
        <tr><th>Id</th><th>Name</th></tr>
    </thead>
    <tr>
        <td>{{ feed.id | async }}</td>
    </tr>
</table> 
  `,
  providers: [ FeedsService ],
})
export class FeedDetailComponent implements OnInit {
  public feed: Observable<Feed>;

  constructor(private route: ActivatedRoute, private feedsService: FeedsService){
  }

  ngOnInit(): any {
    this.route.params.subscribe(params => {
      const name = params['name'];

      this.feed = this.feedsService.details(name);
    });
  }
}