import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NgxLinkifyjsService, Link} from 'ngx-linkifyjs';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  example1 = `Hi, I'm Anthony Nahas, the developer of ngx-linkifyjs. You can find this project on
              github here: https://github.com/anthonynahas/ngx-linkifyjs and the demo app with this
              link: https://anthonynahas.github.io/ngx-linkifyjs. Please feel free to contact me here @ anthony.na@hotmail.de
              if you have any question or troubles with this package. Thank you <3`;

  example2 = 'Output...';

  foundLinks: Link[] = [];

  testLinkResult: boolean;
  testLinkRequested: boolean;

  constructor(private titleService: Title,
              public linkifyService: NgxLinkifyjsService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-linkifyjs');
  }

  editOnStackBlitz() {
    sdk.openGithubProject('anthonynahas/ngx-linkifyjs/tree/master/demo');
  }
}
