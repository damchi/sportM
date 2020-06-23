import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAssignBoatComponent } from './popup-assign-boat.component';

describe('PopupAssignBoatComponent', () => {
  let component: PopupAssignBoatComponent;
  let fixture: ComponentFixture<PopupAssignBoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAssignBoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAssignBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
