import { Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {EmployeeInterface} from "../interfaces/employee.interface";

@Injectable()
export class FirebaseService{

  contactsObs!: Observable<any[]>;
  private contactsCollection: AngularFirestoreCollection<EmployeeInterface>;

  constructor(private af: AngularFirestore) {
    this.contactsCollection = this.af.collection<EmployeeInterface>('employees');
  }

  getContacts(){
    this.contactsObs = this.af.collection('employees').valueChanges() as Observable<any[]>;
    return this.contactsObs;
  }

  addOrUpdateContact(contact:any, contactId?:string,){
    const id = contactId || this.af.createId();
    const data = {id, ...contact};
    this.contactsCollection.doc(id).set(data);
  }

  deleteContact(id:string){
    this.contactsCollection.doc(id).delete();
  }


}
