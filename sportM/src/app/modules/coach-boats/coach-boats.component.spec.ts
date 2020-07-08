import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachBoatsComponent } from './coach-boats.component';

describe('CoachBoatsComponent', () => {
  let component: CoachBoatsComponent;
  let fixture: ComponentFixture<CoachBoatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachBoatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachBoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
