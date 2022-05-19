import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUserMenuComponent } from './navbar-user-menu.component';

describe('NavbarUserMenuComponent', () => {
  let component: NavbarUserMenuComponent;
  let fixture: ComponentFixture<NavbarUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarUserMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
