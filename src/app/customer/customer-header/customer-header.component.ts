import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../_services/customer.service";
import { User } from '../../_models';
import {AuthenticationService} from "../../_services/authentication.service";
import { from } from 'rxjs';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {

  constructor(public customerService: CustomerService, private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onPersonalDetailsClick() {
    this.customerService.customerWhichClick = "personalDetails";
      this.customerService.getUserDetails(this.authService.userName, (res)=>{
        if(res){
          this.customerService.customerWhichClick = "personalDetails";
        }
            })
    }

  onFundTransferClick() {
    this.customerService.customerWhichClick = "fundTransfer"
  }

  onMiniStatementClick() {
    this.customerService.customerWhichClick = "miniStatement"
    this.customerService.getMiniStatement(881951216, (res)=>{
if(res){
  this.customerService.customerWhichClick = "miniStatement";
}
    })
  }

  onDetailStatementClick() {
    this.customerService.customerWhichClick = "detailStatment"
  }

  onUpdateDetailsClick(){
    this.customerService.customerWhichClick = "UpdateDetail"
  }

}
