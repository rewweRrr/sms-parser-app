import {Component, OnInit} from "@angular/core";
import {SmsService} from "../sms.service";
import {SmsModel} from "../models/sms.model";

@Component({
  selector: 'sms-list',
  templateUrl: 'sms-list.component.html'
})
export class SmsListComponent implements OnInit {
  allSmsList: SmsModel[] = [];

  constructor(private smsService: SmsService) {
  }

  ngOnInit() {
    this.smsService.getAllMessages().then(smsList => this.allSmsList = smsList);
  }
}
