import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, take} from "rxjs/operators";
import * as Login from 'src/assets/mocks/login.json';
import * as Feed from 'src/assets/mocks/feed.json';
import * as Users from 'src/assets/mocks/users.json';

@Injectable({
    providedIn: 'root'
})

export class MockUtils {

    public mockResponse(callParams: any, delayMs = 1000): Observable<any>{
        const mockResponse = this.getMockResponse(callParams) || {};
        console.log('mock response created for: '+callParams);
        return of(mockResponse).pipe(delay(delayMs));
    }

    private getMockResponse(callParams: any) {
        switch (callParams.serviceName) {
            case 'login':
                return Login;
            case 'get-feed':
                return Feed;
            case 'get-users':
                return Users;
        }
        return null;
    }
}