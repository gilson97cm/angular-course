import { Component} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'my-form',
  templateUrl: 'app/templates/form.template.html' ,
 
  // styles: [`
  //         input.ng-invalid.ng-touched{
  //           border-left: 3px solid red;
  //           border-right: 3px solid red;
  //         }

  //         input.ng-valid{
  //           border-left: 3px solid green;
  //           border-right: 3px solid green;
  //         }
  // `],
})

export class FormComponent  { 

  // student = {
  //   name: 'Felipe Arias',
  //   email: 'felipe@email.com',
  // }

  // sendForm(form:NgForm){
  //     console.log(this.student);
      
  // }


  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('Juan', [
        Validators.required, 
        Validators.pattern("^.{4}$")
      ]),
      email: new FormControl('',[
        Validators.required,
        this.uniqueEmail, //validador personalizado
      ], this.uniqueEmailAsync),
    });
  }

   sendForm(form:NgForm){
      console.log(this.form);   
  }

  //validacion personalizada 
  uniqueEmail(control: FormControl):{[s:string]:Boolean}{
    var emails: string[] = ['jose@email.com','carlos@email.com'];

    if(emails.indexOf(control.value) != -1){
      return {uniqueEmail: true};
    }

    return null;
  }

  //validacion personalizada asincrona
  uniqueEmailAsync(control: FormControl){
    return new Promise((solve,refuse)=>{
      setTimeout(()=>{
        if(control.value === 'diego@email.com'){
          solve({uniqueEmailAsync: true});
        }else{
          solve(null);
        }
      },2000);
    });
  }

}
