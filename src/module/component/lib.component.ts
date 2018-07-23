import { Component } from '@angular/core';

@Component({
  selector: 'ngx-component',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.scss']
})
export class LibComponent {
  description = 'Angular V6 wrapper for linkifyjs -  library for finding links in plain text ' +
    'and converting them to HTML &lt;a&gt; tags via linkifyjs';
}
