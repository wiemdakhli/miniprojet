import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListvoyagesComponent } from './application/listvoyages/listvoyages.component';
import { DescriptionComponent } from './application/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    ListvoyagesComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
