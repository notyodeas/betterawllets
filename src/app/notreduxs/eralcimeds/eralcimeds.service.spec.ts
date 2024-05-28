import { TestBed } from '@angular/core/testing';

import { EralcimedsService } from './eralcimeds.service';

describe('EralcimedsService', () => {
  let service: EralcimedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EralcimedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
