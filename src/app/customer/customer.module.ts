import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/customer/customer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomerModule { }
