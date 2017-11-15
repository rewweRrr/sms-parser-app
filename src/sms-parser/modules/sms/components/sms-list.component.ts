import {Component, OnInit} from "@angular/core";
import {SmsService} from "../sms.service";
import {SmsModel} from "../models/sms.model";
import {PageUtils} from "../../../../common/page-utils";

@Component({
  selector: 'sms-list',
  templateUrl: 'sms-list.component.html'
})
export class SmsListComponent implements OnInit {

  _allSmsList: SmsModel[] = [];
  _maxCount: number;

  readonly _defaultMaxCount: number = 30;

  private scrollTop: number = 0;

  constructor(private smsService: SmsService) {
  }

  ngOnInit() {
    this._maxCount = this._defaultMaxCount;
    this.scrollTop = 0;
    this.getFilteredList();
  }

  _increaseMaxCount(): void {
    this._maxCount = this._maxCount + this._defaultMaxCount;
    this.scrollTop = PageUtils.getScrollTop();
    this.getFilteredList();
  }

  private getFilteredList(): void {
    this.smsService.getFilteredMessages({maxCount: this._maxCount}).then((smsList) => {
      this._allSmsList = smsList;
      setTimeout(() => {
        PageUtils.scrollTop(this.scrollTop);
      });
    });
  }
}
