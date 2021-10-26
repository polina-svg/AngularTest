import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {

  transform(firstName: string, lastName: string): string {
    return `${firstName} ${lastName[0]}.`
  }

}
