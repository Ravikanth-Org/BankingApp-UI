import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { AlertService, AuthenticationService, UserService } from './_services';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component'
import {OpenAccountComponent} from './admin/open-account/open-account.component';



import { jqxButtonModule }   from 'jqwidgets-ng/jqxbuttons';
import { jqxBarGaugeModule }    from 'jqwidgets-ng/jqxbargauge';
//import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';
//import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'


//import { Home } from './Home';
//import { LoginComponent } from './login';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
     CustomerComponent,
     AdminComponent,
     LoginComponent,
     AdminHomeComponent,
     OpenAccountComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    FormsModule,
    jqxButtonModule,
    jqxBarGaugeModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // provider used to create fake backend

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
