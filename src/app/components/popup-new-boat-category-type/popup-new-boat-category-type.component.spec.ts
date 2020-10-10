import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewBoatCategoryTypeComponent } from './popup-new-owner-type.component';

describe('PopupNewOwnerTypeComponent', () => {
  let component: PopupNewBoatCategoryTypeComponent;
  let fixture: ComponentFixture<PopupNewBoatCategoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNewBoatCategoryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNewBoatCategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
