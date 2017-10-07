import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SmsListComponent} from "./components/sms-list.component";
import {SmsRoutingModule} from "./sms-routing.module";
import {TopToolbarComponent} from "../../components/top-toolbar/top-toolbar.component";
import {ComponentsModule} from "../../components/components.module";

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
  ]
})
export class SmsModule {
}
