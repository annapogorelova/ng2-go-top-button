import {AppPage} from './app.po';
import {browser, logging} from 'protractor';

describe('Example application', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should scroll', () => {
    page.navigateTo();
    expect(page.countPictures()).toEqual(10);
    expect(page.isGoToTopButtonDisplayed()).toEqual(false);
    page.scrollDown();
    expect(page.isGoToTopButtonDisplayed()).toEqual(true);
    page.goToTop();
    expect(page.isGoToTopButtonDisplayed()).toEqual(false);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
