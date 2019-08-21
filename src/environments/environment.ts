// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:3000/api/v1/',
  firebase: {
    apiKey: "AIzaSyCRPyOP0D1g9eu2npk8CFabrpwaPjAhE94",
    authDomain: "n2ntech-d46b8.firebaseapp.com",
    databaseURL: "https://n2ntech-d46b8.firebaseio.com",
    projectId: "n2ntech-d46b8",
    storageBucket: "n2ntech-d46b8.appspot.com",
    messagingSenderId: "384483245887"
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
