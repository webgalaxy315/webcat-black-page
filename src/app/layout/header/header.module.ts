import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { HeaderComponent } from './header/header.component';
import { NavbarSearchFormComponent } from './navbar-search-form/navbar-search-form.component';
import { NavbarUserMenuComponent } from './navbar-user-menu/navbar-user-menu.component';
import { NotificationTogglerComponent } from './notification-toggler/notification-toggler.component';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent, NotificationTogglerComponent, NavbarUserMenuComponent, NavbarSearchFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule { }
