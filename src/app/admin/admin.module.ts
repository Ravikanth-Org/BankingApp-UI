import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
//import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
//import { jqxButtonModule }   from 'jqwidgets-ng/jqxbuttons';
import {AdminHomeModule}from './admin-home/admin-home.module'


@NgModule({
  declarations: [AdminComponent//,jqxButtonComponent
  ]
  ,
  imports: [
    CommonModule//jqxButtonModule
  ]
})
export class AdminModule { }
