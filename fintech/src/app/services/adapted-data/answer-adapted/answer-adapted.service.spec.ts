import { TestBed } from '@angular/core/testing';

import { AnswerAdaptedService } from './answer-adapted.service';

describe('AnswerAdaptedService', () => {
  let service: AnswerAdaptedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerAdaptedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
