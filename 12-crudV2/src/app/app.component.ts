import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";
import {FirebaseService} from "./services/firebase.service";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {EmployeeInterface} from "./interfaces/employee.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formContact!: FormGroup;

  contacts!: any[];
  status!: string;
  currentId!: string;

  constructor(private fireSvc: FirebaseService) {
    this.initForm();
  }

  ngOnInit() {
    this.fireSvc.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  showContact(status: string, id?: string): void {
    this.status = status;
    if (status === 'store'){
      this.currentId = '';
      this.formContact.reset();
    }
    if (id) {
      this.currentId = id;
    }
  }


  editContact(id: string): void {
    this.currentId = id;
    var contact = this.contacts.find(contact => contact.id == id);
    //llena los campos del formulario con la info del contacto
    this.formContact.patchValue(contact);

    this.showContact('update');
  }

  storeUpdateContact(): void {
    var contact = {
      name: this.formContact.value.name,
      lastName: this.formContact.value.lastName,
      email: this.formContact.value.email,
      startDate: this.formContact.value.startDate,
    }

    this.fireSvc.addOrUpdateContact(contact, this.currentId);
    this.showContact('close');
  }

  deleteContact(id:string):void{
    this.fireSvc.deleteContact(id);
    this.showContact('delete');

  }


  private initForm(): void {
    this.formContact = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      startDate: new FormControl(''),
    });
  }

}
