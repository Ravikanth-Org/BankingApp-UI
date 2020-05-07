import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';
import { AlertService, AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';
  isLogin:boolean=false;

  constructor(
    public authenticationService: AuthenticationService,
    private alertService: AlertService) {}
}
