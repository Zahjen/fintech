import { TestBed } from '@angular/core/testing';

import { QuestionThirdPartyService } from './question-third-party.service';

describe('QuestionThirdPartyService', () => {
  let service: QuestionThirdPartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionThirdPartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
