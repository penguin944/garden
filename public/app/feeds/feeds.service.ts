import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { ErrorObservable }  from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export interface Feed {
  id: number;
  name: string;
  last_value: number;
  readings?: Reading[];
}

export interface Reading {
  feed_id: number;
  value: number;
  created_at: Date;
}

@Injectable()
export class FeedsService {
  constructor(private http: Http) {
  }

  private feedsUrl = 'api/feeds';

  public all(): Observable<Feed[]> {
    return this.http.get(this.feedsUrl)
      .map((res) => res.json() || {})
      .map((data) => data.sort((feed1: Feed, feed2: Feed) => feed1.name.localeCompare(feed2.name)))
      .catch(this.handleError);
  }

  public details(idOrName: number | string): Observable<Feed> {
    return this.http.get(`${this.feedsUrl}/${idOrName}`)
      .map((res: Response) => res.json() || { })
      .catch(this.handleError);
  }

  private handleError(error: Response): ErrorObservable {
    return ErrorObservable.create(`${error.status} - ${error.statusText}: ${error.text()}`);
  }
}