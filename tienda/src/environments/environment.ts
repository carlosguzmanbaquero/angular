// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com',
  firebaseConfig : {
    apiKey: 'AIzaSyAMs0YZIC69UMtH4EE1W_VCcxTMBK1gKs0',
    authDomain: 'store-d911a.firebaseapp.com',
    databaseURL: 'https://store-d911a.firebaseio.com',
    projectId: 'store-d911a',
    storageBucket: 'store-d911a.appspot.com',
    messagingSenderId: '309749293735',
    appId: '1:309749293735:web:616f312a19616d86aaf182'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
