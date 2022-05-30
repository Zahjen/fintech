import { TestBed } from '@angular/core/testing';

import { FormDetailAdaptedService } from './form-detail-adapted.service';

describe('FormDetailAdaptedService', () => {
  let service: FormDetailAdaptedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDetailAdaptedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
