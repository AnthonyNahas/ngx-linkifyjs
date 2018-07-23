import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {

    this.router.events.pipe(
      filter((event:RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(event => {
      if (isPlatformBrowser(this.platformId)) {
        window.scroll(0, 0);
      }
    });
  }
}
