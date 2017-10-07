import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {SmsParserModule} from './sms-parser/sms-parser.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(SmsParserModule);
