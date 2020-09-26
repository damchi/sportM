import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewTrainingS3Component } from './popup-new-training-s3.component';

describe('PopupNewTrainingComponent', () => {
  let component: PopupNewTrainingS3Component;
  let fixture: ComponentFixture<PopupNewTrainingS3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupNewTrainingS3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNewTrainingS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
