import {Component, OnInit} from "@angular/core";
import {SmsService} from "../sms.service";
import {SmsModel} from "../models/sms.model";

@Component({
  selector: 'sms-list',
  templateUrl: 'sms-list.component.html'
})
export class SmsListComponent implements OnInit {
  _allSmsList: SmsModel[] = [];

  constructor(private smsService: SmsService) {
  }

  ngOnInit() {
    this.smsService.getAllMessages().then(smsList => this._allSmsList = smsList);
  }
}
