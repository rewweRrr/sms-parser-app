import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {NavigationMenuService} from "./navigation-menu.service";

@Component({
  selector: 'navigation-menu',
  templateUrl: 'navigation-menu.component.html'
})
export class NavigationMenuComponent implements OnInit, OnDestroy {

  _menuOpened: boolean = false;

  private navigationMenuOpenedSubscription: Subscription;

  constructor(private router: Router,
              private navigationMenuService: NavigationMenuService) {
  }

  ngOnInit() {
    this.navigationMenuOpenedSubscription = this.navigationMenuService.getNavigationMenuOpened$()
      .subscribe((navigationMenuOpened: boolean) => this.setNavigationMenuOpened(navigationMenuOpened));
  }

  ngOnDestroy(): void {
    this.navigationMenuOpenedSubscription && this.navigationMenuOpenedSubscription.unsubscribe();
  }

  _openNavigationMenu(open: boolean): void {
    this.navigationMenuService.setNavigationMenuOpened(open);
  }

  _navigate(url: string[]): void {
    this._openNavigationMenu(false);
    setTimeout(() => {
      this.router.navigate(url);
    }, 350);
  }

  _isCurrentPage(url: string): boolean {
    return this.router.url.startsWith(url);
  }

  private setNavigationMenuOpened(navigationMenuOpened: boolean): void {
    this._menuOpened = navigationMenuOpened;
  }
}
