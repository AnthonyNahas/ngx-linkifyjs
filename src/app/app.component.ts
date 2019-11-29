import {Component} from '@angular/core';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {Link, NgxLinkifyjsService} from 'ngx-linkifyjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-linkifyjs';

  example1 = `Hi, I'm Anthony Nahas, the developer of ngx-linkifyjs. You can find this project on
              github here: https://github.com/anthonynahas/ngx-linkifyjs and the demo app with this
              link: https://anthonynahas.github.io/ngx-linkifyjs. Please feel free to contact me here @ anthony.na@hotmail.de
              if you have any question or troubles with this package. Thank you <3`;

  example2 = 'Output...';

  foundLinks: Link[] = [];

  testLinkResult: boolean;
  testLinkRequested: boolean;

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, public linkifyService: NgxLinkifyjsService) {
    angulartics2GoogleAnalytics.startTracking();
  }

}
