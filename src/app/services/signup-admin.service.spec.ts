import { TestBed } from '@angular/core/testing';

import { SignupAdminService } from './user.service';

describe('SignupAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupAdminService = TestBed.get(SignupAdminService);
    expect(service).toBeTruthy();
  });
});
