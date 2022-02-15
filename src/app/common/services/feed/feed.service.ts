import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Feed } from '../../interfaces/feed';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private httpService: HttpService
  ) { }

  public getFeed(): Observable<Feed> {
    return this.httpService.callService("get-feed")
      .pipe(map((feedData: any) => {
        return feedData.data;
      }));
  }
}
