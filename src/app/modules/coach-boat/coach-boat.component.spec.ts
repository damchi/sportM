import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachBoatComponent } from './coach-boat.component';

describe('CoachBoatComponent', () => {
  let component: CoachBoatComponent;
  let fixture: ComponentFixture<CoachBoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachBoatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
