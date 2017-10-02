import { SmsParserAppPage } from './app.po';

describe('sms-parser-app App', function() {
  let page: SmsParserAppPage;

  beforeEach(() => {
    page = new SmsParserAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
