import { TestBed } from '@angular/core/testing';

import { AhaService } from './aha.service';

describe('AhaService', () => {
  let service: AhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
