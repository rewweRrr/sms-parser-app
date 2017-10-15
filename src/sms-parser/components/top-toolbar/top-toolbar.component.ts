import {Component} from "@angular/core";
import {NavigationMenuService} from "../navigation-menu/navigation-menu.service";

@Component({
  selector: 'top-toolbar',
  templateUrl: 'top-toolbar.component.html'
})
export class TopToolbarComponent {

  constructor(private navigationMenuService: NavigationMenuService) {
  }

  _openNavigationMenu(): void {
    this.navigationMenuService.setNavigationMenuOpened(true);
  }
}
