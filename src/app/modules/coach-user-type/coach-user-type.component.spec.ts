import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachAtheleTypeComponent } from './coach-athle-type.component';

describe('CoachAthleTypeComponent', () => {
  let component: CoachAtheleTypeComponent;
  let fixture: ComponentFixture<CoachAtheleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachAtheleTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachAtheleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
