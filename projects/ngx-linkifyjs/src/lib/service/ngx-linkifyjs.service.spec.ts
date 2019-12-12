import {inject, TestBed} from '@angular/core/testing';

import {NgxLinkifyjsService} from './ngx-linkifyjs.service';
import {NgxLinkifyjsConfigToken} from './tokens';
import {LinkType} from '../enum/linktype.enum';
import {Link} from '../interfaces/ngx-linkifyjs.interface';

describe('NgxLinkifyjsService without importing hashtag/mention', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: NgxLinkifyjsConfigToken,
          useValue: {enableHash: false, enableMention: false}
        },
        NgxLinkifyjsService]
    });
  });

  it('should create service without importing the hashtag/mention lib', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    expect(service).toBeTruthy();
  }));

  it('should not find any hashtag links', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    const result: Link[] = service.find('Linkify is #super #rad2015');
    expect(result).toEqual([]);

    // array
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toEqual(0);
  }));

  it('should not find any mention links', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    const result: Link[] = service.find('Linkify needs @you and @someone else');
    expect(result).toEqual([]);

    // array
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toEqual(0);
  }));

});

describe('NgxLinkifyjsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: NgxLinkifyjsConfigToken,
          useValue: {enableHash: true, enableMention: true}
        },
        NgxLinkifyjsService]
    });
  });

  it('should create service', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    expect(service).toBeTruthy();
  }));

  // linkify function
  it('should linkify the provided text - 1 link and 1 email', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    const result: string = service.linkify('For help with GitHub.com, please email support@github.com');
    const expectedResult = 'For help with <a href=\"http://github.com\" class=\"linkified\" target=\"_blank\">GitHub.com</a>, ' +
      'please email <a href=\"mailto:support@github.com\" class=\"linkified\">support@github.com</a>';

    expect(result).toEqual(expectedResult);
  }));

  // linkify function
  it('should linkify the provided text with providing an empty object option',
    inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    const result: string = service.linkify('For help with GitHub.com, please email support@github.com', null);

    const expectedResult = 'For help with <a href=\"http://github.com\" class=\"linkified\" target=\"_blank\">GitHub.com</a>, ' +
      'please email <a href=\"mailto:support@github.com\" class=\"linkified\">support@github.com</a>';

    expect(result).toEqual(expectedResult);
  }));

  // linkify function
  it('should the target attribute not equal to _blank', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    const result: string = service.linkify('For help with GitHub.com, please email support@github.com', {target: {url: '_self'}});

    const expectedResult = 'For help with <a href=\"http://github.com\" class=\"linkified\" target=\"_blank\">GitHub.com</a>, ' +
      'please email <a href=\"mailto:support@github.com\" class=\"linkified\">support@github.com</a>';

    expect(result).not.toEqual(expectedResult);

    expect(result).not.toContain('_blank');
    expect(result).toContain('_self');
  }));

  // find function

  // it('should always return an array after finding a link', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
  //   expect(service.find('Any links to github.com here?')).toBeInstanceOf(Array);
  // }));

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

  it('should find 1 url link and 1 email', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    const result: Link[] = service.find('Any links to github.com here? If not, contact test@example.com');
    expect(result).toEqual(
      [
        {
          type: LinkType.URL,
          value: 'github.com',
          href: 'http://github.com'
        },
        {
          type: LinkType.EMAIL,
          value: 'test@example.com',
          href: 'mailto:test@example.com'
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

  it('should find 2 mention links', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    const result: Link[] = service.find('Linkify needs @you and @someone else');
    expect(result).toEqual(
      [
        {
          type: LinkType.MENTION,
          value: '@you',
          href: '/you'
        },
        {
          type: LinkType.MENTION,
          value: '@someone',
          href: '/someone'
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


