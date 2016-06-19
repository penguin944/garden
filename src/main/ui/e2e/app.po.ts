export class GardenPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('garden-app h1')).getText();
  }
}
