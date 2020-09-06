import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

declare var gtag;

interface Token{
  token: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Tienda';

  private tokensColletions: AngularFirestoreCollection<Token>;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
    private swUpdate: SwUpdate,
    private angularFireMessaging: AngularFireMessaging,
    private angularFirestore: AngularFirestore){

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

    this.tokensColletions = this.angularFirestore.collection<Token>('tokens');
  }

  updatePWA(){
    this.swUpdate.available
    .subscribe(value => {
      console.log('update', value);
      window.location.reload();
    });
  }

  requestPermission(){
    this.angularFireMessaging.requestToken
    .subscribe(token => {
      console.log('token firebase', token);
      this.tokensColletions.add({token});
    });
  }

  listenNotifications(){
    this.angularFireMessaging.messages
    .subscribe(message => {
      console.log(message);
    });
  }

  ngOnInit(){
    this.updatePWA();
    this.requestPermission();
    this.listenNotifications();
  }
}
