import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdboxComponent } from './adbox/adbox.component';
import { PropertyManagerModule } from './property-manager/property-manager.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PropertyManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
