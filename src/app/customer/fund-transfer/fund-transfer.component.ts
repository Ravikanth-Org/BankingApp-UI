import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  fundTransferForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.fundTransferForm = this.formBuilder.group({
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: ['', Validators.required],
      remark: ['', Validators.required],
    });

  }

  onSubmit(fundtransferData: FormGroup) {

    console.log(fundtransferData)
  }

}
