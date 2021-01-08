import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { CoursesResponse } from  './courses-response';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:3000'
  coursesSubject  =  new  BehaviorSubject({});

  constructor(private  httpClient:  HttpClient) { }

  getData(): Observable<CoursesResponse> {
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/courses`).pipe(
      tap(async (res: CoursesResponse) => {
        
        if (res.data) {
          
          this.coursesSubject.next({...res.data});
        }
      })
    );
  }

}
