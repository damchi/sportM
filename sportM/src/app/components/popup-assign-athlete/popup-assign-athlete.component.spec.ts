import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAssignAthleteComponent } from './popup-assign-athlete.component';

describe('PopupAssignBoatComponent', () => {
  let component: PopupAssignAthleteComponent;
  let fixture: ComponentFixture<PopupAssignAthleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAssignAthleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAssignAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
