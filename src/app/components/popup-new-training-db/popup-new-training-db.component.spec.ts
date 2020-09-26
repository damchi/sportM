import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewTrainingDBComponent } from './popup-new-training-db.component';

describe('PopupNewTrainingDBComponent', () => {
  let component: PopupNewTrainingDBComponent;
  let fixture: ComponentFixture<PopupNewTrainingDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupNewTrainingDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNewTrainingDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
