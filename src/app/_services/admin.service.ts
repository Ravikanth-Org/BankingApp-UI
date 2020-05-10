import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  isUserCreated = false;

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
}
