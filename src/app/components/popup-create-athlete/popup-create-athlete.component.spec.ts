import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreateAthleteComponent } from './popup-create-athlete.component';

describe('PopupCreateAthleteComponent', () => {
  let component: PopupCreateAthleteComponent;
  let fixture: ComponentFixture<PopupCreateAthleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCreateAthleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCreateAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
