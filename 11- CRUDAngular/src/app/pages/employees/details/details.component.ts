import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {EmployeeInterface} from "../../../shared/Models/employee.interface";
import {EmployeesService} from "../employees.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  employee: EmployeeInterface;

    navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };

  constructor(private router: Router, private employeeSvc: EmployeesService) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if(typeof this.employee === 'undefined'){
      this.router.navigate(['list']);
    }
  }

    onGoToUpdate():void{
    this.navigationExtras.state!.value = this.employee;
    this.router.navigate(['edit'],this.navigationExtras);
  }

  onGoBackToList(): void{
    this.router.navigate(['list']);
  }

  async onDelete():Promise<void>{
    try {
      await this.employeeSvc.onDeleteEmployee(this.employee?.id);
      this.onGoBackToList();
      // alert('delete');
    }catch(e){
      console.log(e.message)
    }

  }

}
