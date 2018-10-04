// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyANlDE0LVNIeLLNlcOpS4yRFSRmxw-guSQ",
    authDomain: "time-tracker-e615c.firebaseapp.com",
    databaseURL: "https://time-tracker-e615c.firebaseio.com",
    projectId: "time-tracker-e615c",
    storageBucket: "time-tracker-e615c.appspot.com",
    messagingSenderId: "43642677722"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
