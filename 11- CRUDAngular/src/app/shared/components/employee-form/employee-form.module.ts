import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeFormComponent} from "./employee-form.component";



@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    EmployeeFormComponent
  ]
})
export class EmployeeFormModule { }
