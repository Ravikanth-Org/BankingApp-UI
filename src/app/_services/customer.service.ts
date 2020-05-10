import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  setMiniStatementData = new Subject<any>();
  customerWhichClick:string="personalDetails";

  constructor(private client:HttpClient) { 

  }

///api/user/:userId
public getMiniStatement(accountid,callBackFunction){
  this.client.get(`http://localhost:3000/api/transaction/ministatement/${accountid}`)
  .subscribe((response) => {
    console.log(response);
    this.setMiniStatementData.next(response);
    callBackFunction(response);
  });
}

}
