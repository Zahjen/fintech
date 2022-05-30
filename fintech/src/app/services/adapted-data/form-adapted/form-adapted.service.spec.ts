import { TestBed } from '@angular/core/testing';

import { FormAdaptedService } from './form-adapted.service';

describe('FormAdaptedService', () => {
  let service: FormAdaptedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAdaptedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
