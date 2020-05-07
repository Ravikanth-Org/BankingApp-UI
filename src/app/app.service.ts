import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string;


  constructor(private client: HttpClient) {
  }

  public getUsers() {
    this.client.get('http://localhost:3000/api/users')
      .subscribe((response) => {

        console.log(response);
      });
  }

  public login(loginData) {

    this.client.post('http://localhost:3000/api/user/login', loginData)
      .subscribe((response) => {
        console.log(response);
      });
  }
  ///api/user/:userId
  public getUserDetails(userId,callBackFunction){
    this.client.get(`http://localhost:3000/api/user/${userId}`)
    .subscribe((response) => {
      console.log(response);
      callBackFunction(response);
    });
  }
}
