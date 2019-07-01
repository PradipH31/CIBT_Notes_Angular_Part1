import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerList: Array<Customer> = new Array<Customer>();

  public getAll(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>('/data/customers.json');
  }

  public save(customer: Customer): void {
    this.customerList.push(customer);
  }

  constructor(private http: HttpClient) { }
}
