import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {
  openAccountForm: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.openAccountForm = this.formBuilder.group({
      
  });
  }

  onSubmit(){

  }

}
