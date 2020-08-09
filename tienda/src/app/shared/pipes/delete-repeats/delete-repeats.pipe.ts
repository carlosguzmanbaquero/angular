import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteRepeats'
})
export class DeleteRepeatsPipe implements PipeTransform {

  transform(items: any, ...args: any[]): any {
    console.log(`lista en el pipe delete: ${items}`);
    return (new Set(items));
  }

}
