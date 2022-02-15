import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Feed } from '../../interfaces/feed';
import { PostData } from '../../interfaces/post-data';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private httpService: HttpService
  ) { }

  public getFeed(): Observable<Feed> {
    return combineLatest([this.httpService.callService("get-feed"), this.httpService.callService("get-users")])
      .pipe(
        map(results => {
          const postsWithUsers = results[0].data.posts.map(post => {
            const postWithUser: PostData = post;

            results[1].data.users.map(user => {
              if (user.id === post.userId) {
                postWithUser.userData = user;
              }
            });

            return postWithUser;
          });

          return {
            posts: postsWithUsers
          };
        })
      );
  }
}
