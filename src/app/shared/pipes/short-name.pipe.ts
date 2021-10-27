import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {

  transform(firstName: string | undefined, lastName: string | undefined): string {
    if (typeof  lastName !== "undefined") {
      return `${firstName} ${lastName[0]}.`
    }
    return 'undefined'
  }

}
