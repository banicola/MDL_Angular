import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import {Router} from "@angular/router";

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthentificationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private router:Router) {
        this.currentUserSubject = new BehaviorSubject<User>(this.getDecodedAccessToken(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    isAuthenticated(){
        if(this.currentUserValue){
            return true;
        } else {
            return false;
        }
    }
    

    login(id, password) {
        return this.http.post<any>(`${environment.apiUrl}/users/connect`, { id, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', user.message);
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/']);
    }

    getDecodedAccessToken(token: string): any {
        try{
            return jwt_decode(token);
        }
        catch(Error){
            return null;
        }
      }
}