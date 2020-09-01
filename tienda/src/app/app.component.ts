import { Component, PLATFORM_ID, inject, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tienda';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object){

    if (isPlatformBrowser){
      const navEndEvents$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      );

      navEndEvents$.subscribe((event: NavigationEnd) => {
        gtag('config', 'xxxxxx', {
          page_path: event.urlAfterRedirects
        });
      });
    }
  }
}
