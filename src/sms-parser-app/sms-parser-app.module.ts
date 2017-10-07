import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {SmsParserAppComponent} from './sms-parser-app.component';

@NgModule({
  declarations: [
    SmsParserAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [SmsParserAppComponent]
})
export class SmsParserAppModule {
}
