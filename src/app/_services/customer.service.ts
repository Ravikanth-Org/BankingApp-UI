import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerWhichClick:string="personalDetails";

  constructor() { }
}
