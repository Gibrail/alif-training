import { TestBed } from '@angular/core/testing';

import { HyperviserService } from './hyperviser.service';

describe('HyperviserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HyperviserService = TestBed.get(HyperviserService);
    expect(service).toBeTruthy();
  });
});
