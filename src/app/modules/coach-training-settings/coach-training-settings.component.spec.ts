import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachTrainingSettingsComponent } from './coach-training-settings.component';

describe('CoachTrainingSettingsComponent', () => {
  let component: CoachTrainingSettingsComponent;
  let fixture: ComponentFixture<CoachTrainingSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachTrainingSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachTrainingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
