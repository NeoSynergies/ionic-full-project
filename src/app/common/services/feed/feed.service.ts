import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.httpService.callService("get-feed");
  }
}
