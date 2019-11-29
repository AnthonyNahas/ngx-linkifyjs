import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MarkdownModule} from 'ngx-markdown';
import {Angulartics2Module} from 'angulartics2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {NgxLinkifyjsModule} from 'ngx-linkifyjs';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    HttpClientModule,
    NgxLinkifyjsModule.forRoot(),
    FlexLayoutModule,
    Angulartics2Module.forRoot(),
    MarkdownModule.forRoot(),
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
