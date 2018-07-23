import {TestBed, inject} from '@angular/core/testing';

import {NgxLinkifyjsService} from './ngx-linkifyjs.service';
import {Link} from '../..';

describe('LibService', () => {
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

  it('should find a link', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    const result: Link[] = service.find('Any links to github.com here?');
    expect(result).toEqual(
      [
        {
          type: 'url',
          value: 'github.com',
          href: 'http://github.com'
        }
      ]
    );

    expect(result.length).toEqual(1);
  }));

  it('should find more than 1 link', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    const result: Link[] = service.find('Any links to github.com here? Maybe https://github.com/AnthonyNahas');
    expect(result).toEqual(
      [
        {
          type: 'url',
          value: 'github.com',
          href: 'http://github.com'
        },
        {
          type: 'url',
          value: 'https://github.com/AnthonyNahas',
          href: 'https://github.com/AnthonyNahas'
        }
      ]
    );

    expect(result.length).toEqual(2);
  }));

  // test function

  it('should return true only if a link is provided', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    expect(service.test('github.com')).toBeTruthy();
  }));

  it('should return false when the array does not contain only links', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    expect(service.test(['github.com', 'email'])).toBeFalsy();
  }));
});
