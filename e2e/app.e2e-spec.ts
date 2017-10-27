import { ApiIpsumPage } from './app.po';

describe('api-ipsum App', () => {
  let page: ApiIpsumPage;

  beforeEach(() => {
    page = new ApiIpsumPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
