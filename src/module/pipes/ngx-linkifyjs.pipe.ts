import {Pipe, PipeTransform} from '@angular/core';

// @ts-ignore
import linkifyStr from 'linkifyjs/string';
import {NgxLinkifyOptions} from '../..';

@Pipe({
  name: 'linkify'
})
export class NgxLinkifyjsPipe implements PipeTransform {

  transform(value: string, options?: NgxLinkifyOptions): string {
    return value ? linkifyStr(value, options) : value;
  }

}
