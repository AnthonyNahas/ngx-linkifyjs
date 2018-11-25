import {CommonModule} from '@angular/common';
import {Inject, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
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
import {NgxLinkifyjsConfig} from './interfaces/ngx-linkifyjs.interface';

export {LinkType} from './enum/linktype.enum';
export {NgxLinkifyjsPipe} from './pipes/ngx-linkifyjs.pipe';
export {NgxLinkifyjsService} from './service/ngx-linkifyjs.service';

export const NgxLinkifyjsConfigToken = new InjectionToken<NgxLinkifyjsConfig>('NgxLinkifyjsConfig');

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NgxLinkifyjsPipe],
  declarations: [NgxLinkifyjsPipe]
})
export class NgxLinkifyjsModule {

  private static DEFAULT_CONFIG: NgxLinkifyjsConfig = {
    enableHash: true,
    enableMention: true
  };

  static forRoot(config: NgxLinkifyjsConfig = this.DEFAULT_CONFIG): ModuleWithProviders {
    return {
      ngModule: NgxLinkifyjsModule,
      providers:
        [
          NgxLinkifyjsService,
          {
            provide: NgxLinkifyjsConfigToken,
            useValue: config
          },
        ]
    };
  }

  constructor(@Inject(NgxLinkifyjsConfigToken)
              public config: NgxLinkifyjsConfig) {
    if (config.enableHash) {
      hashtag(linkify);
    }

    if (config.enableMention) {
      mention(linkify);
    }
  }

}
