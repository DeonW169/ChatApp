import { Component } from '@angular/core';
import { Router, ActivationEnd, NavigationEnd } from '@angular/router';
import { environment } from './../environments/environment';
import { Title } from '@angular/platform-browser';

declare let ga;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Tergum';
  showHeader: boolean;

  constructor(
    private router: Router,
    private pageTitles: Title,
  ) {
    this.router.events.subscribe((event) => {
      // cancel pending requests when leaving the page
      if (event instanceof ActivationEnd) {
        this.pageTitles.setTitle(event.snapshot.data.title ? event.snapshot.data.title : this.title);
        this.showHeader = event.snapshot.url.length > 0 ? true : false;
      }
      // capture router events and forward them to Google Analytics.
      if (environment.production) {
        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }
      }
    });
  }
}
