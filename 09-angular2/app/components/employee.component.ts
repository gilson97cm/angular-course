import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
    // selector: 'selector-name',
    templateUrl: '/app/template/employee.component.html'
})

export class EmployeeComponent implements OnInit {
   
    employee: Object;

    constructor(private activateRoute:ActivatedRoute,
                private service:EmployeeService) {
     }

    ngOnInit() {
        let id = +this.activateRoute.snapshot.params['id'];
        this.employee = this.service.infoEmployee(id)
                                    .then(resp => this.employee = resp);
     }
}