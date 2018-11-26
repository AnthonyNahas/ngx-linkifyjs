import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxLinkifyjsModule} from 'ngx-linkifyjs';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MarkdownModule} from 'ngx-markdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgxLinkifyjsModule.forRoot(),
    MarkdownModule.forChild(),
    HomeRoutingModule,
    NgbModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
