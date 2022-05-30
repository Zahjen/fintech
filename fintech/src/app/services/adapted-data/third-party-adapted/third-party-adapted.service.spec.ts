import { TestBed } from '@angular/core/testing';

import { ThirdPartyAdaptedService } from './third-party-adapted.service';

describe('ThirdPartyAdaptedService', () => {
  let service: ThirdPartyAdaptedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdPartyAdaptedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
