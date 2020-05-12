import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, from } from 'rxjs';
import { CustomerService } from "../../_services/customer.service";
import {AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  subscription: Subscription;
  upDateAccountForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private customerService:CustomerService, private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.upDateAccountForm = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      dob: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      pin: ['', Validators.required]
  });

   this.subscription = this.customerService.setUserDetails
    .subscribe(
      (data) => {
        //this.userDetails = data;
        this.setUserDataToForm(data);
      }
    );
  }

  onSubmit(updateData:FormGroup){
console.log("update submit");
  }

  setUserDataToForm(data){
    this.upDateAccountForm.setValue(data);
}
}