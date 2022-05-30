import { TestBed } from '@angular/core/testing';

import { QuestionAdaptedService } from './question-adapted.service';

describe('QuestionAdaptedService', () => {
  let service: QuestionAdaptedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionAdaptedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
