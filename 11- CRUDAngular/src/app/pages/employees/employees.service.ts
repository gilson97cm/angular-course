import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeInterface} from "../../shared/Models/employee.interface";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees!: Observable<EmployeeInterface[]>;
  private employeesCollections: AngularFirestoreCollection<EmployeeInterface>;
  constructor(private readonly afs: AngularFirestore) {
    this.employeesCollections = afs.collection<EmployeeInterface>('employees');

    this.getEmployees();
  }

  onDeleteEmployee(id:any):Promise<void>{
    return new Promise(async (resolve,reject) =>{
      try {
        const result = this.employeesCollections.doc(id).delete();
        resolve(result);
      }catch (e) {
        reject(e.message);
      }
    })
  }
  onSaveEmployee(employee: EmployeeInterface, empId:string):Promise<void>{
    return new Promise(async (resolve,reject) =>{
      try{
        const id = empId || this.afs.createId();
        const data = {id, ...employee};
        const result = this.employeesCollections.doc(id).set(data);
        resolve(result);
      }catch (e) {
        reject(e.message);
      }
    })
  }
  private getEmployees():void{
    this.employees = this.employeesCollections.snapshotChanges().pipe(
      map(actions => actions.map(a=>a.payload.doc.data() as EmployeeInterface))
    )
  }

}
