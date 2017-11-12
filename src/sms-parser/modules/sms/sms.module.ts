import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SmsListComponent} from "./components/sms-list.component";
import {SmsRoutingModule} from "./sms-routing.module";
import {ComponentsModule} from "../../components/components.module";
import {SmsService} from "./sms.service";

@NgModule({
  imports: [//alphabetic ordered
    BrowserModule,
    ComponentsModule,
    SmsRoutingModule
  ],
  declarations: [//alphabetic ordered
    SmsListComponent
  ],
  exports: [],
  providers: [//alphabetic ordered
    SmsService
  ]
})

export class SmsModule {
}
