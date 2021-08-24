import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {EmployeesService} from "../employees.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employee$ = this.employeeSvc.employees;
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  };



  constructor(private router: Router, private employeeSvc: EmployeesService) { }

  ngOnInit(): void {
  }

  onGoToEdit(item:any):void{
    this.navigationExtras.state!.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoToSee(item:any):void{
      this.navigationExtras.state!.value = item;
    this.router.navigate(['details'],this.navigationExtras);
  }

 async onGoToDelete(empId:any):Promise<void>{
    try {
     await this.employeeSvc.onDeleteEmployee(empId);
     alert('delete');
    }catch(e){
      console.log(e.message)
    }

  }

}
