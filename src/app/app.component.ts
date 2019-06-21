import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = 'Hey, this app might work';
  colors = ['red', 'green', 'blue'];
  showMessage($event) {
    this.name = 'You clicked on ' + $event.toElement.innerHTML;
  }
}
