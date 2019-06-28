import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerComponent, CustomerDetailComponent, CustomerAddComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
