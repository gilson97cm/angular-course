import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'aFahrenheit'})
export class AFahrenheitPipe implements PipeTransform{
  transform(valor:number, args:any){
    if(valor){
      let temperatura = (valor * 9/5) + 32;
      return temperatura + ' F';
    }
  }
}