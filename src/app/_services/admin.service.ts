import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  isUserCreated = false;
  isAccountCreated = false;
  whichClick = '';

  constructor(private client: HttpClient) {
  }

  public createUser(userData, callback) {
    this.client.post('http://localhost:3000/api/user', userData)
      .subscribe((response) => {
        console.log(response);
        callback(response);
      });
  }

  public createAccount(accountData, callback) {
    this.client.post('http://localhost:3000/api/account', accountData)
      .subscribe((response) => {
        console.log(response);
        callback(response);
      });
  }

  public getUsers(callback) {
    this.client.get('http://localhost:3000/api/users')
      .subscribe((response) => {
        console.log(response);
        callback(response);
      });
  }

  public getBranches(callback) {
    this.client.get('http://localhost:3000/api/branchnames')
      .subscribe((response) => {
        console.log(response);
        callback(response);
      });
  }
}
