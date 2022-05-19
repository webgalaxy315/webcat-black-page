import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationTogglerComponent } from './notification-toggler.component';

describe('NotificationTogglerComponent', () => {
  let component: NotificationTogglerComponent;
  let fixture: ComponentFixture<NotificationTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
