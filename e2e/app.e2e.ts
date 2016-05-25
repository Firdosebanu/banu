import { FirPage } from './app.po';

describe('fir App', function() {
  let page: FirPage;

  beforeEach(() => {
    page = new FirPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fir works!');
  });
});
