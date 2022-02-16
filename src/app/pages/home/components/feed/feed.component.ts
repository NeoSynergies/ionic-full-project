import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Feed } from 'src/app/common/interfaces/feed';
import { PostData } from 'src/app/common/interfaces/post-data';
import { FeedService } from 'src/app/common/services/feed/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  feedSearchResults: Feed;
  feed: Feed;
  save: PostData[];

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

  public onSearch(event) {
    const query = event.target.value.toLowerCase();
    console.log(query);
    
    if (query !== "") {
      this.feedSearchResults.posts = this.save.filter(post => {
        return post.title.toLowerCase().indexOf(query) > -1;
      });
    } else {
      this.feedSearchResults.posts = this.save;
    }

  }

  private getFeed() {
    const feedSubscription = this.feedService
      .getFeed()
      .subscribe((feed: Feed) => {
        this.feedSearchResults = feed;
        this.save = feed.posts;
      });
    this.subscriptions.push(feedSubscription);
  }

  public onRefreshFeed(event) {
    setTimeout(() => {
      this.getFeed();
      event.target.complete();
    }, 2000);
  }

}
