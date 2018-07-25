```typescript
import {Component, OnInit} from '@angular/core';
import {NgxLinkifyjsService, Link, LinkType} from 'ngx-linkifyjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    
  constructor(public linkifyService: NgxLinkifyjsService) {
    const foundLinks: Link[] = this.linkifyService.find('Any links to github.com here? If not, contact test@example.com');
    
    // result - output --> see below 
  }
  
}
```

```typescript
[
  {
    type: LinkType.URL,
    value: 'github.com',
    href: 'http://github.com'
  },
  {
    type: LinkType.EMAIL,
    value: 'test@example.com',
    href: 'mailto:test@example.com'
  }
]
```
