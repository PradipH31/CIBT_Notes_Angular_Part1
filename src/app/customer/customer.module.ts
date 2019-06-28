import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';

@NgModule({
  declarations: [CustomerComponent, CustomerDetailComponent, CustomerAddComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  exports: [
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
