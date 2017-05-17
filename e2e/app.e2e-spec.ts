import { Angul5Page } from './app.po';

describe('angul5 App', () => {
  let page: Angul5Page;

  beforeEach(() => {
    page = new Angul5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
