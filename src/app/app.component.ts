import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = 'Hey, this app might work';
  colors = ['red', 'green', 'blue'];
  color = 'purple';
  show = true;
  dataAction = 'Hide';
  price = 0;
  quantity = 0;
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
  constructor(private http: HttpClient) {
    this.scrap();
  }
  showTotal() {
    alert(this.price * this.quantity);
  }
  scrap() {
    this.http.get('/data/customers.json').subscribe(data => {
      console.log(data);
    });
  }
}
