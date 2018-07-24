```typescript
import {Component, OnInit} from '@angular/core';
import {NgxLinkifyjsService} from 'ngx-linkifyjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
   testLinkResult: boolean;
   testLinkRequested: boolean;

  constructor(public linkifyService: NgxLinkifyjsService) {
  }
  
}

```
