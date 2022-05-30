import { TestBed } from '@angular/core/testing';

import { BuisnessLineService } from './buisness-line.service';

describe('BuisnessLineService', () => {
  let service: BuisnessLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuisnessLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
