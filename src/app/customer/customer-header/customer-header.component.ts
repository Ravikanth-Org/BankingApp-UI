import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../_services/customer.service";

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onPersonalDetailsClick() {
    this.customerService.customerWhichClick = "personalDetails"
  }

  onFundTransferClick() {
    this.customerService.customerWhichClick = "fundTransfer"
  }

  onMiniStatementClick() {
    this.customerService.customerWhichClick = "miniStatement"
  }

  onDetailStatementClick() {
    this.customerService.customerWhichClick = "detailStatment"
  }

  onUpdateDetailsClick(){
    this.customerService.customerWhichClick = "UpdateDetail"
  }

}
