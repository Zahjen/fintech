import { TestBed } from '@angular/core/testing';

import { CategoryAdaptedService } from './category-adapted.service';

describe('CategoryAdaptedService', () => {
  let service: CategoryAdaptedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryAdaptedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
