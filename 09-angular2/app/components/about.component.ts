import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
    // selector: 'selector-name',
    templateUrl: '/app/template/about.component.html'
})

export class AboutComponent implements OnInit{

    employees: Array<Object>;
    constructor(private employeeService: EmployeeService, 
                private router: Router) {
    }

    listOfEmployees(){
       this.employeeService.listOfEmployees()
                            .then(resp => this.employees = resp);
    }
    ngOnInit() {
        this.listOfEmployees();
    }

    selectedEmployee(employee:any){
        this.router.navigate(['employee',employee.id]);
    }

}