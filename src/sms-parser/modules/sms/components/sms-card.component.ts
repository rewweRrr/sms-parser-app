import {Component, Input} from "@angular/core";
import {SmsModel} from "../models/sms.model";

@Component({
  selector: 'sms-card',
  templateUrl: 'sms-card.component.html'
})
export class SmsCardComponent {

  @Input()
  sms: SmsModel;

  _showTime: boolean = false;
}
