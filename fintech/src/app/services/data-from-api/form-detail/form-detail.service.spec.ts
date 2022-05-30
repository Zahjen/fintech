import { TestBed } from '@angular/core/testing';

import { FormDetailService } from './form-detail.service';

describe('FormDetailService', () => {
  let service: FormDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
