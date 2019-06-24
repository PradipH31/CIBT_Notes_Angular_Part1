import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/customer/customer.component';
import { RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';

@NgModule({
  declarations: [CustomerComponent, CustomerDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomerModule { }
