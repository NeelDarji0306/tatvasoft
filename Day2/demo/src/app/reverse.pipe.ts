import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    let result = '';
    for (let i = 0; i < value.length; i++) {
      result = value[i] + result;
    }
    return result;
  }

}
