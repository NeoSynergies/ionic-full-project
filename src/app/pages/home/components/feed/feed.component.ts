import { Component, Input, OnInit } from '@angular/core';
import { Feed } from 'src/app/common/interfaces/feed';
import { FeedService } from 'src/app/common/services/feed/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  feed: Feed;

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.getFeed();
  }

  private getFeed() {
    this.feedService
      .getFeed()
      .subscribe((feed: Feed) => this.feed = feed);
  }

}
