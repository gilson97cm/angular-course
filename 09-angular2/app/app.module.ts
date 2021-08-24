import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home.compinent';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { routing } from './app.routing';
import { ServicesComponent } from './components/services.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeComponent } from './components/employee.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ 
                  BrowserModule, 
                  FormsModule, 
                  ReactiveFormsModule,
                  HttpModule,
                  routing ],

  declarations: [ 
                  AppComponent, 
                  HomeComponent, 
                  AboutComponent, 
                  ContactComponent,
                  ServicesComponent,
                
                  EmployeeComponent, ],
                  
  bootstrap:    [ AppComponent ],

  providers:    [EmployeeService],
})
export class AppModule { }
