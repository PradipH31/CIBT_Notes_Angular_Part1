import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/customer/customer.component';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomerModule { }
