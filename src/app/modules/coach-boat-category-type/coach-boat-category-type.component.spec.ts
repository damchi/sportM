import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachBoatCategoryTypeComponent } from './coach-boat-owner.component';

describe('CoachboatOwnerComponent', () => {
  let component: CoachBoatCategoryTypeComponent;
  let fixture: ComponentFixture<CoachBoatCategoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachBoatCategoryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachBoatCategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
