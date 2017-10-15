import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {SmsParserComponent} from './sms-parser.component';
import {SmsModule} from "./modules/sms/sms.module";
import {SmsParserRoutingModule} from "./sms-parser-routing.module";
import {ComponentsModule} from "./components/components.module";

let Hammer = require("hammerjs/hammer");
Hammer.defaults.touchAction = "pan-x pan-y";

@NgModule({
  declarations: [
    SmsParserComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    SmsModule,
    SmsParserRoutingModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    }
  ],
  bootstrap: [SmsParserComponent]
})
export class SmsParserModule {
}
