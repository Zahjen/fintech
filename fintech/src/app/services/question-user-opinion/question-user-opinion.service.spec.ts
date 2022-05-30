import { TestBed } from '@angular/core/testing';

import { QuestionUserOpinionService } from './question-user-opinion.service';

describe('QuestionUserOpinionService', () => {
  let service: QuestionUserOpinionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionUserOpinionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
