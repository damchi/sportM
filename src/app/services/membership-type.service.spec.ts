import { TestBed } from '@angular/core/testing';

import { MembershipTypeService } from './user-type.service';

describe('UserTypeService', () => {
  let service: MembershipTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembershipTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
