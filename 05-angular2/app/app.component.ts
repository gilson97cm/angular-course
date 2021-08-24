import { Component} from '@angular/core';

@Component({
  selector: 'mi-aplicacion',
  template: `<h1>Aprende Angular 2 Fácilmente !!!</h1> 
              <!-- rnviar informacion de un componente a otro.
               [university] esta declarada el el componente students -->
              <students [university] = "theUniversity"
              (selected)="viewStudent($event)"></students>`    
})

export class AppComponent  { 

  theUniversity = "Universidad Nacional";

  viewStudent(e):void{
    console.log(e.name);
    
  }


}
