import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerList: Array<Customer> = new Array<Customer>();

  public getAll(): Array<Customer> {
    return this.customerList;
  }

  public save(customer: Customer): void {
    this.customerList.push(customer);
  }

  constructor() { }
}
