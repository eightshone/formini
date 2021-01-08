import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { Storage } from  '@ionic/storage';

import { CoursesResponse } from  './courses-response';

@Injectable({
  providedIn: 'root'
})
export class SingleCourseService {
  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:3000'
  coursesSubject  =  new  BehaviorSubject({});
  public connectedUser = {
    token: ''
  };


  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }

  getData(slug: string): Observable<CoursesResponse> {
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/courses/${slug}`).pipe(
      tap(async (res: CoursesResponse) => {
        
        if (res.data) {
          
          this.coursesSubject.next({...res.data});
        }
      })
    );
  }

  joinClass(id: string) {
    this.storage.get("ACCESS_TOKEN").then(e => this.connectedUser['token'] = e);
    const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.connectedUser.token}`
  })
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/courses/${id}/join`, {params: { Authorization: `Bearer ${this.connectedUser.token}`}});
  }

  unjoinClass(id: string) {
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/courses/${id}/unjoin`);
  }

}
