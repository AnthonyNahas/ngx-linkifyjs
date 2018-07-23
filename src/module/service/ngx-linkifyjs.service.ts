import {Injectable} from '@angular/core';
// @ts-ignore
import * as linkify from 'linkifyjs';
import {Link} from '../..';

@Injectable()
export class NgxLinkifyjsService {
  constructor() {
  }

  linkify(text: string): string {
    // @ts-ignore
    return text.linkify();
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
