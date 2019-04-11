import { TestBed } from '@angular/core/testing';

import { AmrsAuthService } from './amrs-auth.service';

describe('AmrsAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmrsAuthService = TestBed.get(AmrsAuthService);
    expect(service).toBeTruthy();
  });
});
