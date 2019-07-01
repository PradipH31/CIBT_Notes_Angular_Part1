import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Array<Customer> = null;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAll().subscribe(data => {
      this.customers = data.map(c => {
        const customer: Customer = new Customer();
        customer.id = c.id;
        customer.firstName = c['fName'];
        customer.lastName = c.lastName;
        customer.email = c.email;
        return customer;
      });
    });
  }

}
