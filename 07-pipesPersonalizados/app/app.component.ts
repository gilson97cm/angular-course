import { Component } from '@angular/core'

@Component({
    selector: 'mi-aplicacion',
    template: `<div class="jumbotron">
                    La temperatura actual es:
                    <span [ngClass]="{'text-danger': temperatura > 30,
                                        'text-warning': temperaturaa <= 30}">
                         {{temperatura | aFahrenheit}}
                    </span>
                   
                </div>
                `
}) 

export class AppComponent {
    temperatura:number = 10;
}
 
