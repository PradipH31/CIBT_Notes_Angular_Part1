import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    let customer: Customer = new Customer();
    customer.id = 1;
    customer.firstName = 'Aakaash';
    customer.lastName = 'Karki';
    customer.email = 'aakash@gmail.com';
    customer.contactNo = '9198021872';
    customer.status = true;
    this.customerService.save(customer);

    customer = new Customer();
    customer.id = 2;
    customer.firstName = 'Aakaash';
    customer.lastName = 'Karki';
    customer.email = 'aakash@gmail.com';
    customer.contactNo = '9198021872';
    customer.status = false;
    this.customerService.save(customer);
  }

}
