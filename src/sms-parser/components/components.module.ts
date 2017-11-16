import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {TopToolbarComponent} from "./top-toolbar/top-toolbar.component";
import {NavigationMenuComponent} from "./navigation-menu/navigation-menu.component";
import {NavigationMenuService} from "./navigation-menu/navigation-menu.service";
import {ShowMoreComponent} from "./show-more/show-more.component";

@NgModule({
  imports: [//alphabetic ordered
    BrowserModule
  ],
  declarations: [//alphabetic ordered
    NavigationMenuComponent,
    ShowMoreComponent,
    TopToolbarComponent
  ],
  exports: [//alphabetic ordered
    NavigationMenuComponent,
    ShowMoreComponent,
    TopToolbarComponent
  ],
  providers: [
    NavigationMenuService
  ]
})
export class ComponentsModule {
}
