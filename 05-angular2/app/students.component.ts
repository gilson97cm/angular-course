import {Component, Input, Output, EventEmitter} from "@angular/core";
import { StudentsService } from "./students.service";

@Component({
    selector: "students",
    templateUrl: 'app/templates/students.template.html',
    providers: [StudentsService],
})

export class StudentsComponent {
    /* @Input abre la propiedad para poder utilizarla en otro componente */
    @Input() university: string;

    @Output() selected = new EventEmitter();

    title = "Lista de Estudiantes";
    // students = ['Andres','Carlos','Juan'];
    students: string[];

    imgUrl: "https://picsum.photos/255"; 
    rounded = true;
    padding = true;

    constructor(studentsService:StudentsService) {
        this.students = studentsService.listOfStudents("Universidad Nacional");
    }

    change(e){
        this.title = e.target.value;
    }

   

    clickOnStudent(e):void{
        this.selected.emit({name: e.target.textContent});
    }
}