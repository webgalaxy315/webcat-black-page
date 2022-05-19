import { Navbar } from './navbar.po';

describe('Header', () => {
  let page: Navbar;

  beforeEach(() => {
    page = new Navbar();
  });

  it('should display create story button, if success click it', () => {
    page.navigateToRoot();
    expect<any>(page.getCreateStoryButton().getText()).toEqual('+ CREATE YOUR STORY');
    page.getCreateStoryButton().click();
  });

  it('should display My contact button, if success click it', () => {
    page.navigateToRoot();
    expect<any>(page.getMyContactButton().isPresent()).toEqual(true);
    page.getMyContactButton().click();
  });

  it('should display Upload Gallery button, if success click it', () => {
    page.navigateToRoot();
    expect<any>(page.getUploadGalleryButton().isPresent()).toEqual(true);
    page.getUploadGalleryButton().click();
  });

  it ('should display notification button, if exists click it', () => {
    page.navigateToRoot();
    expect<any>(page.getNotificationButton().isPresent()).toEqual(true);
    page.getNotificationButton().click();
  });

  it ('notification box should be opened', () => {
    expect<any>(page.getNotificationTogglerBox().isDisplayed()).toEqual(true);
  });

  it ('should display usermenu', () => {
    expect<any>(page.getUserMenuOpenButton().isDisplayed()).toEqual(true);
    page.getUserMenuOpenButton().click();
  });

  it ('usermenu box should be opened', () => {
    expect<any>(page.getUserMenuBox().isDisplayed()).toEqual(true);
  });

});
