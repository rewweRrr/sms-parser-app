import {Injectable} from "@angular/core";
import {SmsModel} from "./models/sms.model";
import {SmsVirtualModel} from "./models/sms-virtual.model";
import {SmsFilterModel} from "./models/sms-filter.model";

@Injectable()
export class SmsService {

  getAllMessages(): Promise<SmsModel[]> {
    return this.getFilteredMessages({maxCount: Number.MAX_VALUE});
  }

  getFilteredMessages(filter: SmsFilterModel): Promise<SmsModel[]> {
    let sms = window["SMS"];

    let listSms = [];

    if (sms) {
      sms.listSMS(filter, (data) => {
        if (Array.isArray(data)) {
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
      });
    }
    return Promise.resolve(listSms);
  }
}
