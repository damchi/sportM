import { TestBed } from '@angular/core/testing';

import { BoatCategoryTypeService } from './boat-owner-type.service';

describe('BoatOwnerTypeService', () => {
  let service: BoatCategoryTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoatCategoryTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
