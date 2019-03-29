import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';
import { NavBar2Component } from '../app/nav-bar2/nav-bar2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBar2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
