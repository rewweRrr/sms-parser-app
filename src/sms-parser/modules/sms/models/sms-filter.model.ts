export class SmsFilterModel {
  box?: string; // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all

  // following 4 filters should NOT be used together, they are OR relationship
  read?: number; // 0 for unread SMS, 1 for SMS already read
  _id?: number; // specify the msg id
  address?: string; // sender's phone number
  body?: string; // content to match

  // following 2 filters can be used to list page up/down
  indexFrom?: number; // start from index 0 (default)
  maxCount?: number; // count of SMS to return each time, default 10
}
