import {Injectable} from '@angular/core';
// @ts-ignore
import * as linkify from 'linkifyjs';
import {Link} from '../..';
import {NgxLinkifyOptions} from '../interfaces/ngx-linkifyjs.interface';

@Injectable()
export class NgxLinkifyjsService {
  constructor() {
  }

  /**
   * Convert the passed text as a string to an appropriate url
   *
   * @param text - the string to convert
   * @param options - options to pass it to the linkifyjs library
   */
  linkify(text: string, options?: NgxLinkifyOptions): string {
    // @ts-ignore
    return text.linkify(options);
  }

  /**
   * Find any links in a given text as a string
   *
   * @param text - the string to find some links
   */
  find(text: string): Array<Link> {
    return linkify.find(text);
  }

  /**
   * Test if a given value or array of values are links
   *
   * @param value - the value to test
   */
  test(value: string | string[]): boolean {
    if (typeof value === 'string') {
      return linkify.test(value);
    }
    return linkify.test(...value);
  }

}
