import { TestBed } from '@angular/core/testing';

import { AnswerDropdownAdaptedService } from './answer-dropdown-adapted.service';

describe('AnswerDropdownAdaptedService', () => {
  let service: AnswerDropdownAdaptedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerDropdownAdaptedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
