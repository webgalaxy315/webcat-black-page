import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatepickerModule } from 'ngx-bootstrap/datepicker';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarDatepickerComponent } from './sidebar-datepicker/sidebar-datepicker.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DatepickerModule.forRoot()
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [SidebarComponent, SidebarDatepickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarModule { }
