import { Ng2LoginFormPage } from './app.po';

describe('ng2-login-form App', function() {
  let page: Ng2LoginFormPage;

  beforeEach(() => {
    page = new Ng2LoginFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
