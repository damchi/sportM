import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewUserTypeComponent } from './popup-new-user-type.component';

describe('PopupNewUserTypeComponent', () => {
  let component: PopupNewUserTypeComponent;
  let fixture: ComponentFixture<PopupNewUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNewUserTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNewUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
