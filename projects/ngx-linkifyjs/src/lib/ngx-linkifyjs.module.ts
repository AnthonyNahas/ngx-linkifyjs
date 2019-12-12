import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';


import {NgxLinkifyjsConfigToken} from './service/tokens';
import {NgxLinkifyjsPipe} from './pipes/ngx-linkifyjs.pipe';

// Export module's public API
export {Link} from './interfaces/ngx-linkifyjs.interface';
import {NgxLinkifyjsConfig} from './interfaces/ngx-linkifyjs.interface';

export {LinkType} from './enum/linktype.enum';
export {NgxLinkifyOptions} from './interfaces/ngx-linkifyjs.interface';
export {NgxLinkifyjsPipe} from './pipes/ngx-linkifyjs.pipe';

export const DEFAULT_CONFIG: NgxLinkifyjsConfig = {enableHash: true, enableMention: true};

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NgxLinkifyjsPipe],
  declarations: [NgxLinkifyjsPipe]
})
export class NgxLinkifyjsModule {

  static forRoot(config: NgxLinkifyjsConfig = DEFAULT_CONFIG): ModuleWithProviders {
    return {
      ngModule: NgxLinkifyjsModule,
      providers:
        [
          {
            provide: NgxLinkifyjsConfigToken,
            useValue: config
          },
        ]
    };
  }
}
