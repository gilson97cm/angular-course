import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AFahrenheitPipe } from './aFahrenheit.pipe'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AFahrenheitPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
