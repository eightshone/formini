import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { HomeResponse } from  './home-response';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:3000'
  homeSubject  =  new  BehaviorSubject({});

  constructor(private  httpClient:  HttpClient) { }

  getData(): Observable<HomeResponse> {
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/home`).pipe(
      tap(async (res: HomeResponse) => {
        
        if (res.data) {
          
          this.homeSubject.next({...res.data});
        }
      })
    );
  }
}
