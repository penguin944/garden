import { GardenPage } from './app.po';

describe('garden App', function() {
  let page: GardenPage;

  beforeEach(() => {
    page = new GardenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('garden works!');
  });
});
