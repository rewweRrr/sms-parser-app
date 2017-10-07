import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {TopToolbarComponent} from "./top-toolbar/top-toolbar.component";

@NgModule({
  imports: [//alphabetic ordered
    BrowserModule
  ],
  declarations: [//alphabetic ordered
    TopToolbarComponent
  ],
  exports: [//alphabetic ordered
    TopToolbarComponent
  ],
  providers: []
})
export class ComponentsModule {
}
