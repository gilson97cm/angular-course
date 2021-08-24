import { Component, OnInit } from '@angular/core';
import {EmployeeInterface} from "../../Models/employee.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EmployeesService} from "../../../pages/employees/employees.service";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employee: EmployeeInterface;
  employeeForm!: FormGroup;
  private isEmail = /\S+@\S.+\.\S+/;

  constructor(private router: Router, private fb:FormBuilder, private employeeSvc: EmployeesService) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
    this.initform();
  }

  ngOnInit(): void {


    if(typeof this.employee === 'undefined'){
      this.router.navigate(['new']);
    }else{
      this.employeeForm.patchValue(this.employee);
    }
  }

  onSave():void{
    if(this.employeeForm.valid){
      const employee = this.employeeForm.value;
      const employeeId = this.employee?.id || '';
      this.employeeSvc.onSaveEmployee(employee, employeeId);
      this.employeeForm.reset();
    }

  }


  onGoBackToList(): void{
    this.router.navigate(['list']);
  }

  isValidField(field:string):string{
    const validateField = this.employeeForm.get(field);
    return (!validateField?.valid && validateField?.touched) ? 'is-invalid' : validateField?.touched  ? 'is-valid' : '';
  }

  private initform():void{
    this.employeeForm = this.fb.group({
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern(this.isEmail)]],
      startDate: ['',[Validators.required]]
    });
  }

}
