import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdministrationComponent} from './administration/administration.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path : '', component : AppComponent},
  {path : 'admin', component: AdministrationComponent},
  {path : 'login', component : LoginComponent},

  //Otherwise redirect to home
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
