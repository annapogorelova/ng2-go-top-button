import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl);
  }

  countPictures() {
    return this.getPictures().count();
  }

  isGoToTopButtonDisplayed() {
    return this.getGoToTopButton().getCssValue('opacity')
      .then(opacity => opacity !== '0');
  }

  scrollDown() {
    const pictureElement = this.getPictures().get(4);
    browser.actions().mouseMove(pictureElement).perform()
      .then(() => this.wait(1));
  }

  private getPictures() {
    return element.all(by.css('.picture'));
  }

  goToTop() {
    this.getGoToTopButton().click()
      .then(() => this.wait(1));
  }

  private getGoToTopButton() {
    return element(by.css('go-top-button button'));
  }

  private wait(seconds: number) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }
}
