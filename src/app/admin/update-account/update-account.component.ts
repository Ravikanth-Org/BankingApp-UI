import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {AppService} from '../../app.service'

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  upDateAccountForm: FormGroup;
  subscription: Subscription;
  //setUserData:any;
  constructor(private formBuilder: FormBuilder,
    private appService:AppService) { }


  ngOnInit(): void {
    this.upDateAccountForm = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      dob: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      pin: ['', Validators.required]
  });

//  userDetails:
//  address: "1-12 Bannergatta Road"
//  city: "Bengaluru"
//  dob: "1985-07-05T00:00:00.000Z"
//  name: "Suresh"
//  phone: 8880567000
//  pin: 560076

    this.subscription = this.appService.setUserData
    .subscribe(
      (data) => {
       // this.setUserData = data;
        this.setUserDataToForm(data);
      }
    );
  //this.recipes = this.recipeService.getRecipes();
  }

  onSubmit() {

  }

 setUserDataToForm(data){
  this.upDateAccountForm.setValue(data["userDetails"]);
 // this.upDateAccountForm.controls["name"].setValue(data["userDetails"]["name"])

 }

//  userDetails:
//  address: "1-12 Bannergatta Road"
//  city: "Bengaluru"
//  dob: "1985-07-05T00:00:00.000Z"
//  name: "Suresh"
//  phone: 8880567000
//  pin: 560076


}
