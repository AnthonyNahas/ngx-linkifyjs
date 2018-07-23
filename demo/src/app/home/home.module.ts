import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgxLinkifyjsModule  } from 'ngx-linkifyjs';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        NgxLinkifyjsModule.forRoot(),
        HomeRoutingModule,
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
