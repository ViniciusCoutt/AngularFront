// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
export const API_PATH = "https://free-to-play-games-database.p.rapidapi.com/api/games"

export const headers = new HttpHeaders().set("x-rapidapi-key", "d1f6301dbcmshc788c85f7b22c9dp14df59jsnd9de38b0c5c0").set("x-rapidapi-host", "free-to-play-games-database.p.rapidapi.com");
