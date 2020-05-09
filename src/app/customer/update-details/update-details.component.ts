import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  upDateAccountForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.upDateAccountForm = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      dob: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      pin: ['', Validators.required]
  });

  }

  onSubmit(updateData:FormGroup){
console.log("update submit");
  }

}
