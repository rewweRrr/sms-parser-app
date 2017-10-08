import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {SmsParserComponent} from './sms-parser.component';
import {SmsModule} from "./modules/sms/sms.module";
import {SmsParserRoutingModule} from "./sms-parser-routing.module";

@NgModule({
  declarations: [
    SmsParserComponent
  ],
  imports: [
    BrowserModule,
    SmsModule,
    SmsParserRoutingModule
  ],
  providers: [],
  bootstrap: [SmsParserComponent]
})
export class SmsParserModule {
}
