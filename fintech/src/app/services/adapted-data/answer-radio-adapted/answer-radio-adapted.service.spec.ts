import { TestBed } from '@angular/core/testing';

import { AnswerRadioAdaptedService } from './answer-radio-adapted.service';

describe('AnswerRadioAdaptedService', () => {
  let service: AnswerRadioAdaptedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerRadioAdaptedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
