import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SmsListComponent} from "./components/sms-list.component";
import {SmsRoutingModule} from "./sms-routing.module";
import {ComponentsModule} from "../../components/components.module";
import {SmsService} from "./sms.service";
import {SmsCardComponent} from "./components/sms-card.component";

@NgModule({
  imports: [//alphabetic ordered
    BrowserModule,
    ComponentsModule,
    SmsRoutingModule
  ],
  declarations: [//alphabetic ordered
    SmsCardComponent,
    SmsListComponent
  ],
  exports: [],
  providers: [//alphabetic ordered
    SmsService
  ]
})

export class SmsModule {
}
