import { TestBed } from '@angular/core/testing';

import { QuestionEntrepriseService } from './question-entreprise.service';

describe('QuestionEntrepriseService', () => {
  let service: QuestionEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
