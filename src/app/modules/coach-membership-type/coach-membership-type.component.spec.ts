import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CoachMembershipTypeComponent} from "./coach-membership-type.component";


describe('CoachAthleTypeComponent', () => {
  let component: CoachMembershipTypeComponent;
  let fixture: ComponentFixture<CoachMembershipTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachMembershipTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachMembershipTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
