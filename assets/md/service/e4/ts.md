```typescript
import {Component, OnInit} from '@angular/core';
import {NgxLinkifyjsService} from 'ngx-linkifyjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    
  constructor(public linkifyService: NgxLinkifyjsService) {
    this.linkifyService.test('github.com'); // return true
    this.linkifyService.test('dev@example.com'); // return true
    this.linkifyService.test(['github.com', 'email']); // return false
    this.linkifyService.test('helloWorld'); // return false
  }
}
```
