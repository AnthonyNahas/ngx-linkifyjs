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

  it('should always return an array after finding a link', inject([NgxLinkifyjsService], (service: NgxLinkifyjsService) => {
    expect(service.find('Any links to github.com here?')).toBeInstanceOf(Array);
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
});
