import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
// @ts-ignore
import * as linkify from 'linkifyjs';
// @ts-ignore
import * as hashtag from 'linkifyjs/plugins/hashtag';
// @ts-ignore
import * as mention from 'linkifyjs/plugins/mention';

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

    hashtag(linkify);
    mention(linkify);

    return {
      ngModule: NgxLinkifyjsModule,
      providers: [NgxLinkifyjsService]
    };
  }
}
