import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Feed } from '../../interfaces/feed';
import { PostData } from '../../interfaces/post-data';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  loadedFeed: Feed;
  constructor(
    private httpService: HttpService
  ) { }

  public getFeed(): Observable<Feed> {
    if (this.loadedFeed) {
      return of(this.loadedFeed);
    } else {
      return this.httpService.callService("get-feed")
      .pipe(
        map((feedData: any) => {
          this.loadedFeed = feedData.data;
          return feedData.data;
        })
      );
    }
    
  }
}
