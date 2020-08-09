import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatNumber'
})
export class RepeatNumberPipe implements PipeTransform {

  transform(itemSelected: any, items: any[]): any {
    console.log(`lista en el pipe repeat: ${items}`);
    return items.filter((item) => itemSelected.id === item.id).length;
   }
}
