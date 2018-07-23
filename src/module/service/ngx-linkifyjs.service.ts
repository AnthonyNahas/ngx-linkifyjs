import {Injectable} from '@angular/core';
// @ts-ignore
import * as linkify from 'linkifyjs';
import {Link} from '../..';

@Injectable()
export class NgxLinkifyjsService {
  constructor() {
  }

  find(text: string): Array<Link> {
    return linkify.find(text);
  }

  test(value: string) {
    return linkify.test(value);
  }

}
