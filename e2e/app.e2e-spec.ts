import { KeypuPage } from './app.po';

describe('keypu App', () => {
  let page: KeypuPage;

  beforeEach(() => {
    page = new KeypuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
