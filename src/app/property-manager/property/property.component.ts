import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  property: Property = null;

  constructor() { }

  ngOnInit() {
    this.property = new Property();
    this.property.id = 1;
    this.property.name = "Nice Bunglow";
    this.property.price = 234000000;
  }

}
