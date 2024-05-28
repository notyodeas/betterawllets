import { TestBed } from '@angular/core/testing';

import { OpolsService } from './opols.service';

describe('OpolsService', () => {
  let service: OpolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
