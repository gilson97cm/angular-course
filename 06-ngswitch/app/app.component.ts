import { Component } from '@angular/core'

@Component({
    selector: 'mi-aplicacion',
    template: `<div class="container">
                    <ul class="nav nav-tabs">
                        <li (click)="pais='argentina'"><a>Argentina</a></li>
                        <li (click)="pais='bolivia'"><a>Bolivia</a></li>
                        <li (click)="pais='brazil'"><a>Brazil</a></li>
                        <li (click)="pais='chile'"><a>Chile</a></li>
                        <li (click)="pais='colombia'"><a>Colombia</a></li>
                    </ul>
                </div>
                <div class="container" [ngSwitch]="pais">
                    <div *ngSwitchCase="'argentina'">Información sobre Argentina.</div>
                    <div *ngSwitchCase="'bolivia'">Información sobre Bolivia.</div>
                    <div *ngSwitchCase="'brazil'">Información sobre Brazil.</div>
                    <div *ngSwitchCase="'chile'">Información sobre Chile.</div>
                    <div *ngSwitchCase="'colombia'">Información sobre Colombia.</div>
                    <div *ngSwitchDefault>Haz click sobre algún pais</div>
                </div>
                `
}) 

export class AppComponent {
    pais:string;
}
 
