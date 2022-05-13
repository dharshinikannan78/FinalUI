import { TestBed } from '@angular/core/testing';

import { InterpectorService } from './interpector.service';

describe('InterpectorService', () => {
  let service: InterpectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterpectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
