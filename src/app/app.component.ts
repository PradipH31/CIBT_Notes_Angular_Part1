import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer/models/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  name = 'Hey, this app might work';
  colors = ['red', 'green', 'blue'];
  color = 'purple';
  show = true;
  dataAction = 'Hide';
  price = 0;
  quantity = 0;
  customers: Array<Customer> = null;
  showMessage($event) {
    this.name = 'You clicked on ' + $event.toElement.innerHTML;
  }
  showOrHide() {
    this.show = !this.show;
    if (this.dataAction === 'Show') {
      this.dataAction = 'Hide';
    } else if (this.dataAction === 'Hide') {
      this.dataAction = 'Show';
    }
  }
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.scrap();
  }
  showTotal() {
    alert(this.price * this.quantity);
  }
  scrap() {
    this.http.get<Array<Customer>>('/data/customers.json').subscribe(data => {
      this.customers = data;
    });
  }
}
