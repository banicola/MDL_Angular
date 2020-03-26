import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../_services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;
  constructor(public authService: AuthentificationService) {
  }

  ngOnInit(): void {
  }

  isLoggedIn() {
    this.isAuthenticated = this.authService.isAuthenticated();
    return this.isAuthenticated;
  }

}
