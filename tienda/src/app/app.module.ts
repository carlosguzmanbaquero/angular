import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '@environments/environment';
import * as Sentry from '@sentry/browser';
import { AuthInterceptor } from './auth/auth.interceptor';
import { QuicklinkModule } from 'ngx-quicklink';
import { ServiceWorkerModule } from '@angular/service-worker';

Sentry.init({
  dsn: 'https://d9e3d5cc94d24255a3b129e0e08ebc21@o437776.ingest.sentry.io/5400748',
  // TryCatch has to be configured to disable XMLHttpRequest wrapping, as we are going to handle
  // http module exceptions manually in Angular's ErrorHandler and we don't want it to capture the same error twice.
  // Please note that TryCatch configuration requires at least @sentry/browser v5.16.0.
  integrations: [
    new Sentry.Integrations.TryCatch({
      XMLHttpRequest: false,
    }),
  ],
});

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    QuicklinkModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
