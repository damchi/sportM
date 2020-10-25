import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewBoatComponent } from './popup-new-boat.component';

describe('PopupNewBoatComponent', () => {
  let component: PopupNewBoatComponent;
  let fixture: ComponentFixture<PopupNewBoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNewBoatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNewBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
