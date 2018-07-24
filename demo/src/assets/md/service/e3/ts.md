```typescript
import {Component, OnInit} from '@angular/core';
import {NgxLinkifyjsService, Link} from 'ngx-linkifyjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  foundLinks: Link[] = [];
  
  constructor(public linkifyService: NgxLinkifyjsService) {
  }
  
}

```
