import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../_services/authentification.service';
//import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
//import {LoginComponent} from '../login/login.component'

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  isAuthenticated: boolean;
  constructor(public authService: AuthentificationService) {
  }

  ngOnInit(): void {
  }

  isLoggedIn() {
    this.isAuthenticated = this.authService.isAuthenticated();
    return this.isAuthenticated;
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
