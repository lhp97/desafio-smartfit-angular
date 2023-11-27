import { TestBed } from '@angular/core/testing';

import { UnitsService } from './unit.service';

describe('UnitsService', () => {
  let service: UnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
