import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';
import { NavBar2Component } from './nav-bar2/nav-bar2.component';
import { MainVideoComponent } from './main-video/main-video.component';
import { Content1Component } from './content1/content1.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBar2Component,
    MainVideoComponent,
    Content1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
