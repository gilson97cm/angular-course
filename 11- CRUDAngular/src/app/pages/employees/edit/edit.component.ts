import { Component, OnInit } from '@angular/core';

@Component({
  //el selector y los estilos se pueden eliminar ya que el componente se llama por una ruta

  // selector: 'app-edit',
  // styleUrls: ['./edit.component.scss']
  template: `<app-employee-form></app-employee-form>`,

})
export class EditComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
