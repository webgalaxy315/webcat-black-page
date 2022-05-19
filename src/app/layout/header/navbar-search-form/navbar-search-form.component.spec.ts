import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSearchFormComponent } from './navbar-search-form.component';

describe('NavbarSearchFormComponent', () => {
  let component: NavbarSearchFormComponent;
  let fixture: ComponentFixture<NavbarSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
