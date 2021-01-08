import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { Router } from  "@angular/router";
import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { AuthResponse } from  './auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:3000';
  authSubject  =  new  BehaviorSubject(false);

  constructor(private  httpClient:  HttpClient, private  storage:  Storage, private  router:  Router) { }

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/users/login`, user).pipe(
      tap(async (res: AuthResponse) => {
        
        if (res.data && res.data.user) {
          
          await this.storage.set("ACCESS_TOKEN", res.data.user.token);
          await this.storage.set("ROLE", res.data.user.role);
          this.authSubject.next(true);
        }
      })
    );
  }

  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("ROLE");
    this.authSubject.next(false);
    this.router.navigateByUrl('home');
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }

  async getRole() {
    return await this.storage.get("ROLE");
  }

}
