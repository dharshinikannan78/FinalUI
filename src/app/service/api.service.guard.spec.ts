import { TestBed } from '@angular/core/testing';

import { ApiServiceGuard } from './apiservice.guard';

describe('Api.ServiceGuard', () => {
  let guard: ApiServiceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApiServiceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
