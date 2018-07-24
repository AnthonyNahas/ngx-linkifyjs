```typescript
import {Component, OnInit} from '@angular/core';
import {NgxLinkifyjsService} from 'ngx-linkifyjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  example1 = `Hi, I'm Anthony Nahas, the developer of ngx-linkifyjs. You can find this project on
              github here: https://github.com/anthonynahas/ngx-linkifyjs and the demo app with this
              link: https://anthonynahas.github.io/ngx-linkifyjs. Please feel free to contact me here @ anthony.na@hotmail.de
              if you have any question or troubles with this package. Thank you <3`;

  constructor(public linkifyService: NgxLinkifyjsService) {
  }
  
}

```
