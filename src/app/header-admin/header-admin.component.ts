import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../_services/authentification.service';
import { User } from '../_models/user';

import * as jwt_decode from "jwt-decode";
//import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
//import {LoginComponent} from '../login/login.component'

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
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
 /* openModal(){
    public matDialog: MatDialog
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(LoginComponent, dialogConfig);
  }*/

}
