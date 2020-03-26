import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import decode from 'jwt-decode';
@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthentificationService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('currentUser');
    console.log(token);
    // decode the token to get its payload
    const tokenPayload = decode(token); // decode(token)
    if (
      !this.auth.isAuthenticated() || 
      tokenPayload.role !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}