export class FirPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fir-app h1')).getText();
  }
}
