import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachBoatListComponent } from './coach-boat-list.component';

describe('CoachBoatListComponent', () => {
  let component: CoachBoatListComponent;
  let fixture: ComponentFixture<CoachBoatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachBoatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachBoatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
