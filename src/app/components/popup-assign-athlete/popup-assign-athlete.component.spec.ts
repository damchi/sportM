import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAssignAthleteComponent } from './popup-assign-athlete.component';

describe('PopupAssignAthleteComponent', () => {
  let component: PopupAssignAthleteComponent;
  let fixture: ComponentFixture<PopupAssignAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAssignAthleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAssignAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
