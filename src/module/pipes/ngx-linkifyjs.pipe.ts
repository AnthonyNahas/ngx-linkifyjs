import {Pipe, PipeTransform} from '@angular/core';

// @ts-ignore
import linkifyStr from 'linkifyjs/string';

@Pipe({
  name: 'linkify'
})
export class NgxLinkifyjsPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return value ? linkifyStr(value, {
      target: {
        url: '_self'
      }
    }) : value;
  }

}
