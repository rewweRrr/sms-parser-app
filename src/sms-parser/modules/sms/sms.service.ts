import {Injectable} from "@angular/core";
import {SmsModel} from "./models/sms.model";

@Injectable()
export class SmsService {

  getAllMessages(): Promise<SmsModel[]> {
    let sms = window["SMS"];

    let filter = {maxCount: 7};
    let listSms = [];

    if (sms) {
      console.log("true");
      sms.listSMS(filter, function (data) {
        if (Array.isArray(data)) {
          data.forEach((element) => {
            let message: SmsModel = {
              id: element["_id"],
              address: element["address"],
              body: element["body"],
              date: new Date(parseInt(element["date"])),
              date_sent: new Date(parseInt(element["date_sent"])),
              read: element["read"]
            };
            listSms.push(message);
          })
        }
      });
    }
    return Promise.resolve(listSms);
  }
}
