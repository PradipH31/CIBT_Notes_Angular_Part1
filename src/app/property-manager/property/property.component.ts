import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  properties: Array<Property> = new Array<Property>();

  constructor() { }

  ngOnInit() {
    this.properties.push(new Property(1, 'Nice Bunglaow', 250000));
    this.properties.push(new Property(2, 'Nice Building', 150000));
    this.properties.push(new Property(3, 'Nice Office', 250010));
  }

}
