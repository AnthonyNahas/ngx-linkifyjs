import {inject, TestBed} from '@angular/core/testing';

// @ts-ignore
import * as linkify from 'linkifyjs';
// @ts-ignore
import * as hashtag from 'linkifyjs/plugins/hashtag';

import {NgxLinkifyjsService} from './ngx-linkifyjs.service';
import {Link, LinkType} from '../..';

describe('LibService', () => {

  beforeAll(() => {
    hashtag(linkify);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxLinkifyjsService]
    });
  });

  it('should create service', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    expect(service).toBeTruthy();
  }));

  // find function

  it('should always return an array after finding a link', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    expect(service.find('Any links to github.com here?')).toBeInstanceOf(Array);
  }));

  it('should return an empty array if no links are provided', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    expect(service.find('Any links to github here?').length).toEqual(0);
  }));

  it('should find an url link', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    const result: Link[] = service.find('Any links to github.com here?');
    expect(result).toEqual(
      [
        {
          type: LinkType.URL,
          value: 'github.com',
          href: 'http://github.com'
        }
      ]
    );

    expect(result.length).toEqual(1);
  }));

  it('should find more than 1 url link', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    const result: Link[] = service.find('Any links to github.com here? Maybe https://github.com/AnthonyNahas');
    expect(result).toEqual(
      [
        {
          type: LinkType.URL,
          value: 'github.com',
          href: 'http://github.com'
        },
        {
          type: LinkType.URL,
          value: 'https://github.com/AnthonyNahas',
          href: 'https://github.com/AnthonyNahas'
        }
      ]
    );

    expect(result.length).toEqual(2);
  }));

  it('should find more than 1 hashtag links', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    const result: Link[] = service.find('Linkify is #super #rad2015');
    expect(result).toEqual(
      [
        {
          type: LinkType.HASHTAG,
          value: '#super',
          href: '#super'
        },
        {
          type: LinkType.HASHTAG,
          value: '#rad2015',
          href: '#rad2015'
        }
      ]
    );

    expect(result.length).toEqual(2);
  }));

  // test function

  it('should return true if a link is provided', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    expect(service.test('github.com')).toBeTruthy();
  }));

  it('should return true if an email is provided', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    expect(service.test('dev@example.com')).toBeTruthy();
  }));

  it('should return false when the array does not contain only links', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    expect(service.test(['github.com', 'email'])).toBeFalsy();
  }));
});
