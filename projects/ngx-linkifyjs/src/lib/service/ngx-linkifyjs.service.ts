import {Inject, Injectable} from '@angular/core';
// @ts-ignore
import * as linkify from 'linkifyjs';
// @ts-ignore
import hashtag from 'linkifyjs/plugins/hashtag';
// @ts-ignore
import mention from 'linkifyjs/plugins/mention';
// @ts-ignore
// import * as linkifyStr from 'linkifyjs/string';
import linkifyStr from 'linkifyjs/string';
// @ts-ignore
import {Link, NgxLinkifyjsConfig, NgxLinkifyOptions} from '../interfaces/ngx-linkifyjs.interface';
import {NgxLinkifyjsConfigToken} from './tokens';

@Injectable({
  providedIn: 'root'
})
export class NgxLinkifyjsService {
  constructor(@Inject(NgxLinkifyjsConfigToken)
              public config: NgxLinkifyjsConfig) {
    if (config.enableHash) {
      console.log('hashtag', hashtag);
      hashtag(linkify);
    }

    if (config.enableMention) {
      mention(linkify);
    }
  }

  /**
   * Convert the passed text as a string to an appropriate url
   *
   * @param text - the string to convert
   * @param options - options to pass it to the linkifyjs library
   */
  linkify(text: string, options?: NgxLinkifyOptions): string {
    // @ts-ignore
    return linkifyStr(text, options);
    // return '';
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
