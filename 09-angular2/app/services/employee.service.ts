// import { EMPLOYEES } from '../resource/arrayEmployees';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Injectable } from "@angular/core";


@Injectable()
export class EmployeeService {

    constructor(private http:Http){}

    listOfEmployees(){
        // return EMPLOYEES;
        let URL = 'https://jsonplaceholder.typicode.com/users';
        return this.http.get(URL)
                .toPromise()
                .then(resp => resp.json())
                .catch(this.ocurredAnError);
    }

    infoEmployee(id:number){
        // return EMPLOYEES.find(employee => employee.id === id);
        let URL = `https://jsonplaceholder.typicode.com/users/${id}`;
        return this.http.get(URL)
                .toPromise()
                .then(resp => resp.json())
                .catch(this.ocurredAnError);
    }

    private ocurredAnError(error:any){
        console.log('Ocurrio un error en el llamado HTTP ', error.message);
        return Promise.reject(error.message || error);
        
    }

    sendInfoEmployee(employee:any){
        const info = JSON.stringify(employee);
         let URL = `https://angular-2-2c255-default-rtdb.firebaseio.com/data.json`;
        return this.http.post(URL, info)
                .toPromise()
                .then(resp => console.log(resp));
    }
}