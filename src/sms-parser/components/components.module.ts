import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {TopToolbarComponent} from "./top-toolbar/top-toolbar.component";
import {NavigationMenuComponent} from "./navigation-menu/navigation-menu.component";
import {NavigationMenuService} from "./navigation-menu/navigation-menu.service";

@NgModule({
  imports: [//alphabetic ordered
    BrowserModule
  ],
  declarations: [//alphabetic ordered
    NavigationMenuComponent,
    TopToolbarComponent
  ],
  exports: [//alphabetic ordered
    NavigationMenuComponent,
    TopToolbarComponent
  ],
  providers: [
    NavigationMenuService
  ]
})
export class ComponentsModule {
}
