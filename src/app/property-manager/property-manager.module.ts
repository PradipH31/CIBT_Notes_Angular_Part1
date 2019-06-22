import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property/property.component';

@NgModule({
  declarations: [PropertyComponent],
  imports: [
    CommonModule
  ], exports: [
    PropertyComponent
  ]
})
export class PropertyManagerModule { }
