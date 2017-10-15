import {Injectable} from "@angular/core";
import {Observable, Subscriber} from "rxjs";

@Injectable()
export class NavigationMenuService {

  private navigationMenuOpened$: Observable<boolean>;
  private navigationMenuOpenedSubscriber: Subscriber<boolean>;

  constructor() {
    this.init()
  }

  setNavigationMenuOpened(navigationOpened: boolean): void {
    this.navigationMenuOpenedSubscriber && this.navigationMenuOpenedSubscriber.next(navigationOpened);
  }

  getNavigationMenuOpened$(): Observable<boolean> {
    return this.navigationMenuOpened$;
  }

  private init() {
    if (!this.navigationMenuOpened$) {
      this.navigationMenuOpened$ = Observable.create((subscriber: Subscriber<boolean>) =>
        this.navigationMenuOpenedSubscriber = subscriber).share();
    }
  }
}
