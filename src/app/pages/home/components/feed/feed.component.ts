import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Feed } from 'src/app/common/interfaces/feed';
import { FeedService } from 'src/app/common/services/feed/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  feed: Feed;
  private subscriptions: Subscription[] = [];

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.getFeed();
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getFeed() {
    const feedSubscription = this.feedService
      .getFeed()
      .subscribe((feed: Feed) => this.feed = feed);
    this.subscriptions.push(feedSubscription);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getFeed();
      event.target.complete();
    }, 2000);
  }

}
