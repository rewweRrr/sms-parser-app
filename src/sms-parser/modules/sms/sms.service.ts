import {Injectable} from "@angular/core";
import {SmsModel} from "./models/sms.model";
import {SmsVirtualModel} from "./models/sms-virtual.model";
import {SmsFilterModel} from "./models/sms-filter.model";
import {ApiService} from "../../../common/api.service";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";

@Injectable()
export class SmsService extends ApiService {

  private readonly SMS_LIST_FILE_NAME = "sms-list.json";

  getAllMessages(): Observable<SmsModel[]> {
    return this.getFilteredMessages({maxCount: Number.MAX_VALUE});
  }

  getFilteredMessages(filter: SmsFilterModel): Observable<SmsModel[]> {
    return Observable.create((subscriber: Subscriber<SmsModel[]>) => {
      let sms = window["SMS"];

      let convertSmsCb = (data: SmsVirtualModel[]) => {
        subscriber.next(this.convertSmsVirtualModel(data));
        subscriber.complete();
      };

      if (this.debug) {
        this.getDataFromFile<SmsVirtualModel[]>(this.SMS_LIST_FILE_NAME).subscribe(convertSmsCb);
      } else {
        sms && sms.listSMS(filter, convertSmsCb);
      }
    });
  }

  private convertSmsVirtualModel(data: SmsVirtualModel[]): SmsModel[] {
    let listSms: SmsModel[] = [];

    if (data && data.length) {
      data.forEach((element: SmsVirtualModel) => {
        let message: SmsModel = {
          id: element._id ? element._id : 0,
          address: element.address ? element.address : "",
          body: element.body ? element.body : "",
          date: element.date ? new Date(element.date) : null,
          date_sent: element.date ? new Date(element.date_sent) : null,
          read: element.read === 1
        };
        listSms.push(message);
      })
    }
    return listSms;
  }
}
