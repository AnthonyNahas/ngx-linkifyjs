import {Injectable} from '@angular/core';
// @ts-ignore
import * as linkify from 'linkifyjs';
import {Link} from '../..';
import {NgxLinkifyOptions} from '../interfaces/ngx-linkifyjs.interface';

@Injectable()
export class NgxLinkifyjsService {
  constructor() {
  }

  linkify(text: string, options?: NgxLinkifyOptions): string {
    // @ts-ignore
    return text.linkify(options);
  }

  find(text: string): Array<Link> {
    return linkify.find(text);
  }

  test(value: string | string[]): boolean {
    if (typeof value === 'string') {
      return linkify.test(value);
    }
    return linkify.test(...value);
  }

}
