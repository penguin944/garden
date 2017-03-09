import 'vendor';

import { PleimannGardenPage } from './app.po';

describe('pleimann-garden App', function() {
  let page: PleimannGardenPage;

  beforeEach(() => {
    page = new PleimannGardenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
