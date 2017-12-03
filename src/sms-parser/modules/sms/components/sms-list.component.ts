import {Component, OnDestroy, OnInit} from "@angular/core";
import {SmsService} from "../sms.service";
import {SmsModel} from "../models/sms.model";
import {PageUtils} from "../../../../common/utils/page-utils";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'sms-list',
  templateUrl: 'sms-list.component.html'
})
export class SmsListComponent implements OnInit, OnDestroy {

  _allSmsList: SmsModel[] = [];
  _maxCount: number;

  readonly _defaultMaxCount: number = 30;

  private scrollTop: number = 0;
  private filteredListSubscription: Subscription;

  constructor(private smsService: SmsService) {
  }

  ngOnInit(): void {
    this._maxCount = this._defaultMaxCount;
    this.scrollTop = 0;
    this.getFilteredList();
  }

  ngOnDestroy(): void {
    this.filteredListSubscription && this.filteredListSubscription.unsubscribe();
  }

  _increaseMaxCount(): void {
    this._maxCount = this._maxCount + this._defaultMaxCount;
    this.scrollTop = PageUtils.getScrollTop();
    this.getFilteredList();
  }

  private getFilteredList(): void {
    this.filteredListSubscription && this.filteredListSubscription.unsubscribe();
    this.filteredListSubscription = this.smsService.getFilteredMessages({maxCount: this._maxCount}).subscribe((smsList: SmsModel[]) => {
      this._allSmsList = smsList;
      setTimeout(() => {
        PageUtils.scrollTop(this.scrollTop);
      });
    });
  }

//optimization, see interface TrackByFunction angular.io
  _trackByFn(index: number, item: SmsModel): any {
    return item.id;
  }
}
