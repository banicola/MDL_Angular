import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { MatButtonModule } from '@angular/material/button';
//import { MatDialogModule } from '@angular/material/dialog';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent as LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { HeaderComponent } from './header/header.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ReportComponent } from './report/report.component';
import { UserBlockComponent } from './user-block/user-block.component';
import { HomeComponent } from './home/home.component';

import { 
  AuthGuardService 
} from './_services/auth-guard/auth-guard.service';
import { 
  RoleGuardService 
} from './_services/auth-guard/role-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    LoginComponent,
    HeaderComponent,
    HeaderAdminComponent,
    ReportComponent,
    UserBlockComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RoleGuardService, AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
