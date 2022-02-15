import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MockUtils } from '../../utils/mock.utils';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient,
    private mockUtils: MockUtils
  ) { }

  callService(serviceName:string, serviceMethod = 'POST', requestBody?:any): Observable<any> {

    let responseServiceObservable: Observable<any>;

    const serviceCallParams = {
      serviceName: serviceName,
      serviceMethod: serviceMethod,
      requestBody: requestBody
    };

    if (environment.mockProvider) {
      responseServiceObservable = this.mockUtils.mockResponse(serviceCallParams);
    } else {
      responseServiceObservable = this.httpCall(serviceCallParams);
    }

    responseServiceObservable = responseServiceObservable.pipe(
      map((response) => {
        console.log('La response es:');
        if (environment.mockProvider)return response.default;
        return response;
      })
    )
    return responseServiceObservable;
    
  }

  private httpCall(serviceCallParams) {
    switch (serviceCallParams.serviceMethod){
      case 'GET':
        return this.httpClient.get(environment.apiDomain + '/' + serviceCallParams.serviceName)
      case 'POST':
        return this.httpClient.post(environment.apiDomain + '/' + serviceCallParams.serviceName, serviceCallParams.requestBody)
      default:
        return null;
    }
  }
}
