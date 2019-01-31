import { ProvaCastPage } from './app.po';

describe('prova-cast App', function() {
  let page: ProvaCastPage;

  beforeEach(() => {
    page = new ProvaCastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
