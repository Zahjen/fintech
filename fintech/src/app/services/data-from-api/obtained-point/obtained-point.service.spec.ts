import { TestBed } from '@angular/core/testing';

import { ObtainedPointService } from './obtained-point.service';

describe('ObtainedPointService', () => {
  let service: ObtainedPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtainedPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
