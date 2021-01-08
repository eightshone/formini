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
  userSubject = new BehaviorSubject({});

  constructor(private  httpClient:  HttpClient, private  storage:  Storage, private  router:  Router) { }

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/users/login`, user).pipe(
      tap(async (res: AuthResponse) => {
        
        if (res.data && res.data.user) {
          
          await this.storage.set("ACCESS_TOKEN", res.data.user.token);
          await this.storage.set("ROLE", res.data.user.role);
          await this.storage.set("FIRST_NAME", res.data.user.name) ;
          await this.storage.set("LAST_NAME", res.data.user.last_name);
          await this.storage.set("PROFILE_PICTURE", res.data.user.profile_picture);
          this.authSubject.next(true);
        }
      })
    );
  }

  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("ROLE");
    await this.storage.remove("FIRST_NAME");
    await this.storage.remove("LAST_NAME");
    await this.storage.remove("PROFILE_PICTURE");
    this.authSubject.next(false);
    this.userSubject.next({});
    this.router.navigateByUrl('home');
  }

  isLoggedIn() {
    if(this.storage.get("ACCESS_TOKEN")) {
      this.authSubject.next(true);
    }
    return this.authSubject.asObservable();
  }

  async getRole() {
    return await this.storage.get("ROLE");
  }

  async getUser() {
    if (!await this.storage.get("ACCESS_TOKEN")) {
      this.userSubject.next({});
    return this.userSubject.asObservable();
    }
    const user = {
      role: await this.storage.remove("ROLE"),
      firstName: await this.storage.remove("FIRST_NAME"),
      lastName: await this.storage.remove("LAST_NAME"),
      profilePicture: await this.storage.remove("PROFILE_PICTURE")
    }
    this.userSubject.next({...user});
    return this.userSubject.asObservable();
  }

}
