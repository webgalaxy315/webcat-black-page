import { browser, element, by } from 'protractor';

export class Navbar {
  navigateToRoot() {
    return browser.get('/');
  }

  getCreateStoryButton() {
    return element(by.css('app-root app-header .create-your-story-wrapper button'));
  }

  getMyContactButton() {
    return element(by.css('app-root app-header button.nav-my-contacts'));
  }

  getUploadGalleryButton() {
    return element(by.css('app-root app-header button.nav-upload-gallery'));
  }

  getNotificationButton() {
    return element(by.css('app-root app-header app-notification-toggler .notification-toggler button.navbar-notifications'));
  }

  getNotificationTogglerBox() {
    return element(by.css('app-root app-header app-notification-toggler .notification-toggler .notifications-wrap'));
  }

  getUserMenuOpenButton() {
    return element(by.css('app-root app-header app-navbar-user-menu .navbar-user-menu button'));
  }

  getUserMenuBox() {
    return element(by.css('app-root app-header app-navbar-user-menu .navbar-user-menu .menu-notifications'));
  }
}
