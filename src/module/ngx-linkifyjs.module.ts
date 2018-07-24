import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
// @ts-ignore
import * as linkify from 'linkifyjs';
// @ts-ignore
import hashtag from 'linkifyjs/plugins/hashtag';
// @ts-ignore
import mention from 'linkifyjs/plugins/mention';

import {NgxLinkifyjsService} from './service/ngx-linkifyjs.service';
import {NgxLinkifyjsPipe} from './pipes/ngx-linkifyjs.pipe';

// Export module's public API
export {Link} from './interfaces/ngx-linkifyjs.interface';
export {LinkType} from './enum/linktype.enum';
export {NgxLinkifyjsPipe} from './pipes/ngx-linkifyjs.pipe';
export {NgxLinkifyjsService} from './service/ngx-linkifyjs.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NgxLinkifyjsPipe],
  declarations: [NgxLinkifyjsPipe]
})
export class NgxLinkifyjsModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxLinkifyjsModule,
      providers: [NgxLinkifyjsService]
    };
  }

  constructor() {
    hashtag(linkify);
    // mention(linkify);
  }
}
