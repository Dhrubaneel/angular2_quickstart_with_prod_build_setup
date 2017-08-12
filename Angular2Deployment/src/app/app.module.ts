import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationModule } from "./registration/registration.module";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from "./registration/registration.component";

const routes:Routes=[
  {path:"",component: RegistrationComponent}
];

@NgModule({
  imports:      [ BrowserModule, RegistrationModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
