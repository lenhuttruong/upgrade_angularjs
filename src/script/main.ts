// import polyfills
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//noinspection TypeScriptValidateTypes
platformBrowserDynamic().bootstrapModule(AppModule);