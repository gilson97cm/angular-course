import { Injectable } from '@angular/core';

export class StudentsService {
  
     listOfStudents(university): Array<string>{
        if(university == "Universidad Nacional"){
            return  ['Studetn1 UN','student2 UN'];
            // return [];
        }
        return ['Student3', 'Student5'];
    }
    
}