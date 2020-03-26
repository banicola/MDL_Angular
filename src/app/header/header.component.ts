import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../_services/authentification.service';
import { User } from '../_models/user';

import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;
  data;
  constructor(public authService: AuthentificationService) {
    this.data = localStorage.getItem('currentUser');
  }

  ngOnInit(): void {
  }

  isLoggedIn() {
    this.isAuthenticated = this.authService.isAuthenticated();
    return this.isAuthenticated;
  }

  getCurrentUser<User>(){
    var currentUser = this.getDecodedAccessToken(this.data);
    return currentUser.firstname+" "+currentUser.lastname;
  }

  getDecodedAccessToken(token: string): User {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

}
