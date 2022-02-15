import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../interfaces/user';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpService: HttpService
  ) { }

  public getUsers(): Observable<User[]> {
    return this.httpService.callService("get-users")
      .pipe(
        map((feedData: any) => {
          return feedData.data;
        })
      );
  }
}
