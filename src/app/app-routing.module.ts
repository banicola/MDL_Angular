import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdministrationComponent} from './administration/administration.component';
import {LoginComponent} from './login/login.component';
import {ReportComponent} from './report/report.component';
import {UserBlockComponent} from './user-block/user-block.component';

import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'admin', component: AdministrationComponent},
  {path : 'login', component : LoginComponent},
  {path : 'report', component : ReportComponent},
  {path : 'user-block', component : UserBlockComponent},

  //Otherwise redirect to home
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
