import { NgxLinkifyjsDemoPage } from './app.po';

describe('ngx-linkifyjs-demo App', () => {
  let page: NgxLinkifyjsDemoPage;

  beforeEach(() => {
    page = new NgxLinkifyjsDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
