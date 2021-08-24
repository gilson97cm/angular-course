import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
    // selector: 'selector-name',
    templateUrl: '/app/template/contact.component.html'
})

export class ContactComponent {

    formContact: FormGroup;

    constructor(private router:Router,
        private employeeService: EmployeeService,) {
        this.formContact = new FormGroup({
            name: new FormControl('', [
                Validators.required,
                Validators.pattern("^.{6}$")
            ]),
            email: new FormControl('', [
                Validators.required,
                this.uniqueEmail,
            ]),
        });
    }

    sendForm() {
    
        //ir a otra pagina
        // this.router.navigate(['home']);
        this.employeeService.sendInfoEmployee({
            name: this.formContact.value.name, 
            email: this.formContact.value.email
        });
        console.log('El servicio fue llamado');
        

    }

    uniqueEmail(form: FormControl):{[s:string]: Boolean}{

        var emails = ['jorje@email.com','carlos@email.com'];

        if(emails.indexOf(form.value) != -1 ){
            return {uniqueEmail:true};
        }
        return null;
    }

}