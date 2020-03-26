import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdministrationComponent} from './administration/administration.component';
import {LoginComponent} from './login/login.component';
import {ReportComponent} from './report/report.component';
import {UserBlockComponent} from './user-block/user-block.component';

import {HomeComponent} from './home/home.component';

import { 
  AuthGuardService as AuthGuard 
} from './_services/auth-guard/auth-guard.service';
import { 
  RoleGuardService as RoleGuard 
} from './_services/auth-guard/role-guard.service';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'admin', 
  component: AdministrationComponent, 
  canActivate: [AuthGuard]
  /** 
  data: { 
    expectedRole: 'etudiant'
  }*/  },
  {path : 'login', component : LoginComponent},
  {path : 'report', component : ReportComponent, canActivate: [AuthGuard]},
  {path : 'user-block', component : UserBlockComponent, canActivate: [AuthGuard]},

  //Otherwise redirect to home
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
