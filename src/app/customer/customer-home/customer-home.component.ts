import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

userDetails={
address:"xyz bangalore",
city:"Bangalore",
dob:new Date(),
name:"Ram Kumar",
phone:8787287290,
pin:603103,
email:'ram@gmail.com',
userId:"34ser7",
accountType:"saving"


}

  constructor() { }

  ngOnInit(): void {
  }

}
