import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  setMiniStatementData = new Subject<any>();
  setUserDetails = new Subject<any>();
  setAccountDetails = new Subject<any>();
  customerWhichClick = 'home';
  isTransferred = false;
  accountId: number;

  constructor(private client: HttpClient) {

  }

// api/user/:userId
public getMiniStatement(callBackFunction){
  this.client.get(`http://localhost:3000/api/transaction/ministatement/${this.accountId}`)
  .subscribe((response) => {
    console.log(response);
    this.setMiniStatementData.next(response);
    callBackFunction(response);
  });
}

public getDetailedStatement(searchQry, callBackFunction){
  this.client.post(`http://localhost:3000/api/transaction/detailedstatement`, searchQry)
  .subscribe((response) => {
    console.log(response);
    callBackFunction(response);
  });
}



// api/user/:name
public getUserDetails(username, callBackFunction){
  this.client.get(`http://localhost:3000/api/users/${username}`)
  .subscribe((response) => {
    let data = response[0]["userDetails"];
    data["userid"] = response[0]["userid"]
    console.log(data);
    this.setUserDetails.next(data);
    this.accountId=data["userid"];
    callBackFunction(data);
  //  this.getAccountDetails(data["userid"], callBackFunction)
  });
}

///api/account/:userid
  public getAccountDetails(userid, callBackFunction){
    this.client.get(`http://localhost:3000/api/account/${userid}`)
    .subscribe((response) => {
      console.log(response);
      this.setAccountDetails.next(response);
      this.accountId = response["accountid"];
      callBackFunction(response);
    });
  }

  public getAccounts(callback) {
    this.client.get('http://localhost:3000/api/accounts')
      .subscribe((response) => {
        console.log(response);
        callback(response);
      });
  }

  public fundTransfer(transfer, callback) {
    this.client.post('http://localhost:3000/api/account/fundtransfer', transfer)
      .subscribe((response) => {
        console.log(response);
        callback(response);
      });
  }


}
